var tipuesearch = {"pages": [{'title': 'ABOUT', 'text': '40823116 四設計二甲\xa0 江東祐 \n 網頁\xa0 https://40823116.github.io/cd2021/content/index.html \n 倉儲\xa0 https://github.com/40823116/cd2021 \n \n', 'tags': '', 'url': 'ABOUT.html'}, {'title': 'stage1', 'text': '', 'tags': '', 'url': 'stage1.html'}, {'title': 'W2', 'text': '由另一位組員構思主題，最後訂定為自動寵物飼料機，並且由我繪製後半部分及修改。 \n Inventor2017自動寵物飼料機 \n \n https://drive.google.com/file/d/1lA8aTwoB9qaprvF4VHMq7TYMH2LgLTIg/view?usp=sharing \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '使用coppeliasim進行模擬，在過程中產生了幾個問題與改良機會。 \n 在上方攪拌器中的攪拌片一開始的表現就較為不理想，一次性地將過多的飼料撥入槽內，使的部分飼料卡在孔隙，於是我們進行了夏墅的變更。 \n \n 初步建模時的攪拌片，旋轉時會會不太穩定，在後來的改動中，中間連結一個套筒，底部加裝幾個齒，且增加為六片，模擬起來也較為順暢。 \n \n 在運輸終點的飼料盆，也發現了可以改良的機會。 \n 初步建模用了較大的圓角，目的為防止寵物被盆口刮傷，模擬後卻因為前方檔片過低，飼料會滑出槽外，所以把原角的直徑縮小，既不會使寵物受傷，也變相提高檔片的高度。 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '在最後的一周，我在成品的外觀上添加一些裝飾，希望能達到吸引目光的效果。 \n \n 花紋設計 \n 還有加裝一個蓋子，不讓寵物直接取得食物。 \n', 'tags': '', 'url': 'W4.html'}, {'title': 'stage2', 'text': '', 'tags': '', 'url': 'stage2.html'}, {'title': 'W5-W6', 'text': '組員增加至4人，並使用heroku \n', 'tags': '', 'url': 'W5-W6.html'}, {'title': 'W7-W8', 'text': '', 'tags': '', 'url': 'W7-W8.html'}, {'title': 'stage3', 'text': '', 'tags': '', 'url': 'stage3.html'}, {'title': 'W10-W11', 'text': '', 'tags': '', 'url': 'W10-W11.html'}, {'title': 'task1', 'text': '作業ㄉ程式 \n # open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open("stage3_2a.txt") as fh:\n    # readlines will read into the whole line and put into 16 list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n    data = [a.replace(\'4823122\',\'40823122\') for a in data]\n    data = [b.replace(\'\\t\\t\\t\\t\',\' \') for b in data]\n    print(data)\nfor i in range(len(data)):\n    group = data[i].rstrip("\\n").split("\\t")\n    print(\'<p>\'+group[0]+\'|<a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">網站</a> | <a href="https://github.com/\'+group[2]+\'/stage3-ag\'+group[0][9]+\'">倉儲</a></p>\')\n    for j in range(2,17,2):\n        try:\n            print(\'<p>\'+group[j]+\'|<a href="https://\'+group[j]+\'.github.io/cd2021">網站</a> | <a href="https://github.com/\'+group[2]+\'/cd2021">倉儲</a> | <a href="https://\'+group[j]+\'.github.io/stage3-ag\'+group[0][9]+\'">小組網站</a></p>\')\n        except:\n            continue\n#  the following will use group data to generate needed html \n 完成品 \n stage3_ag1| 網站  |  倉儲 \n 40823131| 網站  |  倉儲  |  小組網站 \n a40823112| 網站  |  倉儲  |  小組網站 \n 40823123| 網站  |  倉儲  |  小組網站 \n 40823145| 網站  |  倉儲  |  小組網站 \n 40823136| 網站  |  倉儲  |  小組網站 \n 40823109| 網站  |  倉儲  |  小組網站 \n 40823116| 網站  |  倉儲  |  小組網站 \n 40823108| 網站  |  倉儲  |  小組網站 \n stage3_ag2| 網站  |  倉儲 \n 40823151| 網站  |  倉儲  |  小組網站 \n 40623121| 網站  |  倉儲  |  小組網站 \n 40871106| 網站  |  倉儲  |  小組網站 \n 40823102| 網站  |  倉儲  |  小組網站 \n 40823104| 網站  |  倉儲  |  小組網站 \n 40823106| 網站  |  倉儲  |  小組網站 \n 40823101| 網站  |  倉儲  |  小組網站 \n 40823132| 網站  |  倉儲  |  小組網站 \n stage3_ag3| 網站  |  倉儲 \n 40823119| 網站  |  倉儲  |  小組網站 \n 40823150| 網站  |  倉儲  |  小組網站 \n 40823103| 網站  |  倉儲  |  小組網站 \n 40823107| 網站  |  倉儲  |  小組網站 \n 40523252| 網站  |  倉儲  |  小組網站 \n 40823154 | 網站  |  倉儲  |  小組網站 \n stage3_ag4| 網站  |  倉儲 \n 40823142| 網站  |  倉儲  |  小組網站 \n 40823144| 網站  |  倉儲  |  小組網站 \n 40823127| 網站  |  倉儲  |  小組網站 \n 40823148| 網站  |  倉儲  |  小組網站 \n 40823121| 網站  |  倉儲  |  小組網站 \n 40823135| 網站  |  倉儲  |  小組網站 \n 40823114| 網站  |  倉儲  |  小組網站 \n 40823146| 網站  |  倉儲  |  小組網站 \n stage3_ag5| 網站  |  倉儲 \n 40823111| 網站  |  倉儲  |  小組網站 \n 40823115| 網站  |  倉儲  |  小組網站 \n 40823128| 網站  |  倉儲  |  小組網站 \n 40823120| 網站  |  倉儲  |  小組網站 \n 40823140| 網站  |  倉儲  |  小組網站 \n 40823124| 網站  |  倉儲  |  小組網站 \n 40823139| 網站  |  倉儲  |  小組網站 \n 40823126| 網站  |  倉儲  |  小組網站 \n stage3_ag6| 網站  |  倉儲 \n 40823152| 網站  |  倉儲  |  小組網站 \n 40823110| 網站  |  倉儲  |  小組網站 \n 40823122| 網站  |  倉儲  |  小組網站 \n 40823125| 網站  |  倉儲  |  小組網站 \n 40823117| 網站  |  倉儲  |  小組網站 \n 40823129| 網站  |  倉儲  |  小組網站 \n 40823149| 網站  |  倉儲  |  小組網站 \n 40823153| 網站  |  倉儲  |  小組網站', 'tags': '', 'url': 'task1.html'}]};