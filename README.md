# Lyric Finder API

API Ini Digunakan untuk mencari lirik lagu beserta detailnya.

## Cara Penggunaan 
| endpoint | parameter | Usage |
| :---: | :---: | :---: |
| `/api/lyric` | `q` | `/api/lyric?q={param}` |

## Contoh penggunaan
```
https://lyric-find-rezzaapr.vercel.app/api/lyric?q=drain you
```
## Output
```json
{
"status": true,
"response": {
"song_info": {
"artist": "Nirvana",
"title": "Nirvana – Drain You",
"album_name": "Nevermind",
"album_img": "https://www.ultimate-guitar.com/static/storage/album/images/2/f/2fa4e21a0b128e03ca65e854ff66e397a8ff0f72.jpg@115"
},
"lyrics": "One baby to another says, \"I'm lucky to have met you\"\nI don't care what you think unless it is about me\nIt is now my duty to completely drain you\nA travel through a tube and end up in your infection\nChew your meat for you\nPass it back and forth in a passionate kiss\nFrom my mouth to yours\nI like you\n\nWith eyes so dilated, I've became your pupil\nYou've taught me everything without a poison apple\nThe water is so yellow\nI'm a healthy student\nIndebted and so grateful\nVacuum out the fluids\nChew your meat for you\nPass it back and forth in a passionate kiss\nFrom my mouth to yours\nI like you, you, you, you, you, you\n\nOne baby to another says, \"I'm lucky to have met you\"\nI don't care what you think unless it is about me\nIt is now my duty to completely drain you\nA travel through a tube and end up in your infection\nChew your meat for you\nPass it back and forth in a passionate kiss\nFrom my mouth to yours\nSloppy lips to lips\nYou're my vitamins\nI'm like you                "
}
}
```
