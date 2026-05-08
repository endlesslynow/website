$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "images\mongol-siege-cards"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$headers = @{
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
    "Referer" = "https://commons.wikimedia.org/"
}

$images = @(
    @{
        file = "al-mustasim-detail.jpg"
        title = "Caliph al-Mustasim detail"
        page = "https://commons.wikimedia.org/wiki/File:Caliph_al-Musta%27%E1%B9%A3im_(detail)._Folio_89v_(British_Library,_Or_2780).jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Caliph_al-Musta%27%E1%B9%A3im_(detail)._Folio_89v_(British_Library%2C_Or_2780).jpg?width=800"
        license = "Public domain"
    },
    @{
        file = "hulagu-cropped.jpg"
        title = "Hulagu cropped"
        page = "https://commons.wikimedia.org/wiki/File:Hulagu_(cropped).JPG"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Hulagu_(cropped).JPG?width=500"
        license = "Public domain"
    },
    @{
        file = "al-mustasim-before-hulagu.jpg"
        title = "The Caliph al-Mustasim brought before Hulagu Khan"
        page = "https://commons.wikimedia.org/wiki/File:The_Caliph,_al-Musta%27%E1%B9%A3im,_brought_before_H%C5%ABl%C4%81g%C5%AB_Kh%C4%81n_(miniature)._Folio_89v_(British_Library,_Or_2780).jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/The_Caliph%2C_al-Musta%27%E1%B9%A3im%2C_brought_before_H%C5%ABl%C4%81g%C5%AB_Kh%C4%81n_(miniature)._Folio_89v_(British_Library%2C_Or_2780).jpg?width=900"
        license = "Public domain"
    },
    @{
        file = "al-mustasim-defiance-quran.jpg"
        title = "Qur'an copied by Ya'qut al-Musta'simi in Baghdad"
        page = "https://commons.wikimedia.org/wiki/File:Folios_1b-2a_from_Part_15_of_a_30-part_Qur%E2%80%99an_copied_by_Ya%27qut_al-Musta%27simi_in_Baghdad_1282-1283_AD_(681_AH)_(cropped).jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Folios_1b-2a_from_Part_15_of_a_30-part_Qur%E2%80%99an_copied_by_Ya%27qut_al-Musta%27simi_in_Baghdad_1282-1283_AD_(681_AH)_(cropped).jpg?width=900"
        license = "Public domain"
    },
    @{
        file = "mongol-siege-engines.jpg"
        title = "Hulagu's army attacking city with siege engine"
        page = "https://commons.wikimedia.org/wiki/File:Persian_painting_of_H%C3%BCleg%C3%BC%E2%80%99s_army_attacking_city_with_siege_engine.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Persian_painting_of_H%C3%BCleg%C3%BC%E2%80%99s_army_attacking_city_with_siege_engine.jpg?width=800"
        license = "Public domain"
    },
    @{
        file = "talisman-gate.jpg"
        title = "Talisman Gate, Baghdad"
        page = "https://commons.wikimedia.org/wiki/File:Talisman_Gate,_Sarre,_Friedrich_Paul_Theodor,_1911.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Talisman_Gate%2C_Sarre%2C_Friedrich_Paul_Theodor%2C_1911.jpg?width=800"
        license = "Public domain"
    },
    @{
        file = "fall-of-baghdad-diez.jpg"
        title = "Fall of Baghdad, Diez Albums"
        page = "https://commons.wikimedia.org/wiki/File:DiezAlbumsFallOfBaghdad.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/DiezAlbumsFallOfBaghdad.jpg?width=1000"
        license = "Public domain"
    },
    @{
        file = "diez-execution.jpg"
        title = "Diez Albums execution scene"
        page = "https://commons.wikimedia.org/wiki/File:DiezAlbumsExecution.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/DiezAlbumsExecution.jpg?width=900"
        license = "Public domain"
    },
    @{
        file = "ilkhanate-map.png"
        title = "Ilkhanate in 1256-1353"
        page = "https://commons.wikimedia.org/wiki/File:Ilkhanate_in_1256%E2%80%931353.PNG"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/Ilkhanate_in_1256%E2%80%931353.PNG?width=800"
        license = "Public domain"
    },
    @{
        file = "ibn-battuta-baghdad.jpg"
        title = "Baghdad in the 14th century"
        page = "https://commons.wikimedia.org/wiki/File:TIB_V2_D080_Baghdad_in_the_14th_century.jpg"
        source = "https://commons.wikimedia.org/wiki/Special:FilePath/TIB_V2_D080_Baghdad_in_the_14th_century.jpg?width=900"
        license = "Public domain"
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
        file = "images/mongol-siege-cards/$($image.file)"
        title = $image.title
        page = $image.page
        source = $image.source
        license = $image.license
    }
}

$sources | ConvertTo-Json -Depth 3 | Set-Content -Path (Join-Path $outDir "sources.json") -Encoding UTF8
