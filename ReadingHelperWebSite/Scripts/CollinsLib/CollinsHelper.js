var CollinsHelper = {

    DictionaryList: [],

    GetDic: function (DicCode) {
        var DicResult = "Unknown";
        switch (DicCode) {
            case DicType.English: console.log("English"); break;
            case DicType.French: console.log("French"); break;
            case DicType.Spanish: console.log("Spanish"); break;
        }
        return DicResult;
    },
    GetAllDics: function () {
        
    },
}

if (typeof DicType == "undefined") {
    var DicType = {};
    DicType.UnKnown = 0;
    DicType.English = 1;
    DicType.French = 2;
    DicType.Spanish = 3;
}
