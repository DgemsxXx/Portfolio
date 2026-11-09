# Place this script inside your extracted Google Drive download folder and run in PowerShell
# It compresses your videos to <5MB 1080p web-ready MP4s and extracts WebP posters automatically.

New-Item -ItemType Directory -Force -Path ".\public\videos"

Get-ChildItem -Path . -Recurse -Filter *.mp4 | ForEach-Object {
    $cleanName = ($_.BaseName).ToLower() -replace '[^a-z0-9]+', '-'
    Write-Host "Optimizing $($_.Name) -> $cleanName.mp4"
    ffmpeg -y -i $_.FullName -vf "scale=-2:1080" -r 30 -c:v libx264 -crf 24 -preset fast -profile:v high -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart ".\public\videos\$cleanName.mp4"
    ffmpeg -y -i $_.FullName -ss 00:00:00.500 -vframes 1 -vf "scale=-2:1080" -q:v 80 ".\public\videos\$cleanName-poster.webp"
}
