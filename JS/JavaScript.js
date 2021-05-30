$(document).ready(function () {

    //טולטיפ בעמעבר עכבר על האייקונים
    $('.icons').tooltip();

});

// מערך של דיבים המכילים את התוכן
var divsContent = ["#welcomeDiv", "#explanationDiv", "#learnDiv", "#whatDiv", "#peopleDiv", "#adjustDiv"];
// מערך של שמות הכפתורי אייקון ולוגו
var iconBG = ["explanation", "learn", "what", "people", "adjust"];

//כשלוחצים על כפתורי הניווט ולוגו
function clickIcon(element) {
    //להסתיר את כל התוכן
    for (i = 0; i < divsContent.length; i++) {
        $(divsContent[i]).addClass("displayNone");
    }
    //להציג את התוכן רק של הכפתור שלחצתי עליו
    $("#" + element + "Div").removeClass("displayNone");

    //לאפס את העיצוב של כל האייקונים לרקע לבן
    for (i = 0; i < iconBG.length; i++) {
        $("#" + iconBG[i]).addClass(iconBG[i] + "Icon");
        $("#" + iconBG[i]).removeClass(iconBG[i] + "Icon_a");
    }

    //לשנות את הרקע של האייקון שלחצתי עליו לירוק
    $("#" + element).removeClass(element + "Icon");
    $("#" + element).addClass(element + "Icon_a");
}

//כשלוחצים על הפלוסים
function clickPlusIcon(element) {
    //כשהטקסט נפתח לשנות את האייקון שלחצתי עליו לכתום
    if ($('#' + element).hasClass('plusIconBG')) {
        $('#' + element).addClass('plusIconBG_a')
        $('#' + element).removeClass('plusIconBG')

    }
    //כשהטקסט נעלם לצבוע את האייקון שלחצתי עליו ללבן
    else {
        $('#' + element).removeClass('plusIconBG_a')
        $('#' + element).addClass('plusIconBG')
    }
}


//מערך של טקסטים מאחורי כפתורי מספר
var numbersText = ["שליטה וקצב למידה אישי", "הקפדה על רצף נגישות התוכן", "ממשק פשוט ולא מתחכם", "למידה בסביבה מהנה וידידותית", "חיזוק הלומדים באמצעות פידבקים", "אינטראקציות בסיסיות בלבד", "שימוש בליווי קולי", "טקסט בליווי גרפיקה מתאימה"];

//בלחיצה על כפתור מספר
function clickNumbers(element) {

    //$("#adjustList li").removeClass("displayNone");

    //יופיע בלייבל את הטקסט לפי המיקום במערך
    var nunberClicked = $(element).text();
    $("#adjustOutput").text(numbersText[nunberClicked - 1]);

    // לאפס את הכפתורים לרקע שקוף
    $("#adjustList li").removeClass("clickbleNunbers_a");

    //הכפתור ייצבע לכתום
    $(element).addClass("clickbleNunbers_a");
}

//בלחיצה על כפתור טיימליין
function clickTimeline(element) {
    //כשהטקסט נפתח לשנות את העיגול שלחצתי עליו לכתום
    if ($(element).hasClass('timelineCircle')) {
        $(element).addClass('timelineCircle_a')
        $(element).removeClass('timelineCircle')
    }
    //כשהטקסט נעלם לצבוע את העיגול שלחצתי עליו ללבן
    else {
        $(element).removeClass('timelineCircle_a')
        $(element).addClass('timelineCircle')
    }
}