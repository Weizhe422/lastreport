# 音樂播放器 - 即時字幕功能

## 功能說明

這是一個具有即時字幕功能的音樂播放器，主要特點：

1. **即時字幕同步**：字幕會隨著音樂播放進度自動顯示和高亮顯示當前歌詞
2. **點擊跳轉**：點擊任何一句歌詞，音樂會自動跳轉到該位置
3. **視覺效果**：當前播放的歌詞會有特殊的高亮效果和動畫
4. **自動滾動**：歌詞會自動滾動，始終將當前歌詞顯示在中央

## 使用方法

### 快速開始

1. 將專案文件放在本地目錄
2. 在瀏覽器中打開 `index.html` 文件
3. 如果要使用實際音樂文件，請將您的音樂文件命名為 `sample-audio.mp3` 並放在同一目錄下

### 添加自己的音樂和歌詞

#### 1. 更換音樂文件

將您的音樂文件放在專案目錄中，並在 `index.html` 中更新音頻源：

```html
<source src="your-music-file.mp3" type="audio/mpeg">
```

#### 2. 自定義歌詞

在 `script.js` 文件中修改 `lyricsData` 陣列：

```javascript
const lyricsData = [
    { time: 0, text: "第一句歌詞" },
    { time: 3.5, text: "第二句歌詞" },
    { time: 7.2, text: "第三句歌詞" },
    // 添加更多歌詞...
];
```

- `time`: 該句歌詞出現的時間（秒）
- `text`: 歌詞內容

#### 3. 更新歌曲信息

在 `index.html` 中更新歌曲標題和藝人信息：

```html
<h2 id="track-title">您的歌曲名稱</h2>
<p id="track-artist">藝人名稱</p>
```

## 檔案結構

```
lastreport/
├── index.html      # 主 HTML 文件
├── style.css       # 樣式文件
├── script.js       # JavaScript 邏輯
├── README.md       # 說明文件
└── sample-audio.mp3 # 音樂文件（需自行添加）
```

## 技術特點

- **純前端實現**：使用 HTML5、CSS3 和 原生 JavaScript
- **響應式設計**：適配不同螢幕尺寸
- **平滑動畫**：使用 CSS transitions 實現流暢的視覺效果
- **自動同步**：使用 `timeupdate` 事件實現精確的時間同步

## 瀏覽器支援

- Chrome (推薦)
- Firefox
- Safari
- Edge

所有現代瀏覽器都支援 HTML5 Audio API。

## 示範

即使沒有實際的音樂文件，您也可以打開 `index.html` 查看界面和歌詞顯示效果。添加音樂文件後即可體驗完整功能。

## 注意事項

1. 確保音樂文件格式為瀏覽器支援的格式（MP3、WAV、OGG 等）
2. 時間戳應該按順序排列
3. 時間戳的精確度會影響同步效果，建議精確到小數點後一位
