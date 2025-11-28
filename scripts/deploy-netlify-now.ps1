Param(
    [Parameter(Mandatory=$true)][string]$Token,
    [Parameter(Mandatory=$true)][string]$SiteId,
    [Parameter(Mandatory=$false)][string]$Dir
)

# One-shot deploy helper.
# This script does NOT write the token to disk. It sets env vars for this session,
# runs `npx netlify deploy`, then restores the previous env state.
#
# Usage example (run from repository root):
# .\apps\web\scripts\deploy-netlify-now.ps1 -Token '<your-token>' -SiteId '<your-site-id>'

if (-not $Dir) {
    $scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
    $projectRoot = Resolve-Path (Join-Path $scriptRoot '..')
    $Dir = Join-Path $projectRoot 'build\client'
}

if (-not (Test-Path $Dir)) {
    Write-Error "Build directory not found: $Dir`nRun the build first (e.g. in `apps/web` run `npm run build`)."
    exit 1
}

# Save old values so we can restore them
$oldToken = $env:NETLIFY_AUTH_TOKEN
$oldSite = $env:NETLIFY_SITE_ID

$env:NETLIFY_AUTH_TOKEN = $Token
$env:NETLIFY_SITE_ID = $SiteId

try {
    Write-Output "Deploying '$Dir' to Netlify site id '$SiteId' (token hidden)."
    npx netlify deploy --prod --dir="$Dir" --site $SiteId
}
finally {
    if ($null -ne $oldToken) { $env:NETLIFY_AUTH_TOKEN = $oldToken } else { Remove-Item Env:NETLIFY_AUTH_TOKEN -ErrorAction SilentlyContinue }
    if ($null -ne $oldSite) { $env:NETLIFY_SITE_ID = $oldSite } else { Remove-Item Env:NETLIFY_SITE_ID -ErrorAction SilentlyContinue }
    Write-Output "Environment restored; NETLIFY_AUTH_TOKEN removed from session."    
}
