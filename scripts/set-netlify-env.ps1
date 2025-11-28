Param(
    [Parameter(Mandatory=$true)] [string]$Token,
    [Parameter(Mandatory=$true)] [string]$SiteId
)

# Sets the Netlify env vars in the current PowerShell session.
# Usage (paste your real token when running):
# .\set-netlify-env.ps1 -Token '<your-token>' -SiteId '<your-site-id>'

$env:NETLIFY_AUTH_TOKEN = $Token
$env:NETLIFY_SITE_ID = $SiteId

Write-Output "NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID set for this session (token not printed)."
