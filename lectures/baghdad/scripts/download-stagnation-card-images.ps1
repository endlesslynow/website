$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "images\stagnation-cards"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$headers = @{
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
    "Referer" = "https://commons.wikimedia.org/"
}

$images = @(
    @{
        file = "khan-murjan.jpg"
        title = "Khan Murjan"
        page = "https://commons.wikimedia.org/wiki/File:Khan_Murjan.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Khan_Murjan.jpg?width=900"
        license = "CC BY 2.0"
    },
    @{
        file = "timur-siege-baghdad.jpg"
        title = "Timur at the Siege of Baghdad"
        page = "https://commons.wikimedia.org/wiki/File:Timur_at_the_Siege_of_Baghdad_(July_1401).jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Timur_at_the_Siege_of_Baghdad_(July_1401).jpg?width=800"
        license = "Public domain"
    },
    @{
        file = "timur-soldiers.jpg"
        title = "Soldiers marching in front of Timur"
        page = "https://commons.wikimedia.org/wiki/File:Soldiers_marching_in_front_of_Timur,_Zafarnama,_Shiraz,_Iran,_1552.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Soldiers_marching_in_front_of_Timur%2C_Zafarnama%2C_Shiraz%2C_Iran%2C_1552.jpg?width=800"
        license = "Public domain"
    },
    @{
        file = "shah-ismail.jpg"
        title = "Shah Ismail I Safavid portrait detail"
        page = "https://commons.wikimedia.org/wiki/File:Shah_Ismail_I_Safavid,_Behzad_(portrait_detail).jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Shah_Ismail_I_Safavid%2C_Behzad_(portrait_detail).jpg?width=700"
        license = "Public domain"
    },
    @{
        file = "chaldiran.jpg"
        title = "Battle of Chaldiran"
        page = "https://commons.wikimedia.org/wiki/File:Battle_of_Chaldiran_(1514).jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Chaldiran_(1514).jpg?width=800"
        license = "CC BY-SA 2.0"
    }
)

$sources = @()
foreach ($image in $images) {
    $target = Join-Path $outDir $image.file
    if ((Test-Path -LiteralPath $target) -and ((Get-Item -LiteralPath $target).Length -gt 0)) {
        Write-Host "Already saved $($image.file)"
    } else {
        $saved = $false
        for ($attempt = 1; $attempt -le 4 -and -not $saved; $attempt++) {
            try {
                Invoke-WebRequest -Uri $image.source -OutFile $target -Headers $headers
                $saved = $true
            } catch {
                if ($attempt -eq 4) { throw }
                $delay = 8 * $attempt
                Write-Warning "Retrying $($image.file) in $delay seconds"
                Start-Sleep -Seconds $delay
            }
        }
        Write-Host "Saved $($image.file)"
        Start-Sleep -Seconds 3
    }

    $sources += [pscustomobject]@{
        file = "images/stagnation-cards/$($image.file)"
        title = $image.title
        page = $image.page
        source = $image.source
        license = $image.license
    }
}

$sources | ConvertTo-Json -Depth 3 | Set-Content -Path (Join-Path $outDir "sources.json") -Encoding UTF8
