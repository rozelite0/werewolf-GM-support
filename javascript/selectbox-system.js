//人数カウント


//人狼----------------------------------------------------------------------------------

var wereWolfCount = 0;

function wereWolfCountUp(){

    if (wereWolfCount >= 5) {
    } else {
        //カウンタに 1 を加算
        wereWolfCount++;
        //カウンタの値を HTML 内の counter に表示
        document.getElementById("wereWolfCount").innerHTML = wereWolfCount + "人";
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "wereWolfParent" + wereWolfCount);
        div_element.innerHTML = '<div class="name-box name-box-werewolf-team"><input type="text" class="name-input" value="●人狼："></div>';
        var parent_object = document.getElementById("nameBoxDiv");
        parent_object.appendChild(div_element);
        $('.name-box').draggable();
    }

}

function wereWolfCountDown(){

    switch(wereWolfCount) {
        
        case 1:
        wereWolfCount--;
        $("#wereWolfParent1").remove();
        document.getElementById("wereWolfCount").innerHTML = wereWolfCount + "人";
        break;

        case 2:
        wereWolfCount--;
        $("#wereWolfParent2").remove();
        document.getElementById("wereWolfCount").innerHTML = wereWolfCount + "人";
        break;

        case 3:
        wereWolfCount--;
        $("#wereWolfParent3").remove();
        document.getElementById("wereWolfCount").innerHTML = wereWolfCount + "人";
        break;

        case 4:
        wereWolfCount--;
        $("#wereWolfParent4").remove();
        document.getElementById("wereWolfCount").innerHTML = wereWolfCount + "人";
        break;

        case 5:
        wereWolfCount--;
        $("#wereWolfParent5").remove();
        document.getElementById("wereWolfCount").innerHTML = wereWolfCount + "人";
        break;

    }
    
}

//人狼----------------------------------------------------------------------------------


//人狼の子供----------------------------------------------------------------------------------

var childOfWereWolfCount = 0;

function childOfWereWolfCountUp(){

    if (childOfWereWolfCount >= 1) {
    } else {
        //カウンタに 1 を加算
        childOfWereWolfCount++;
        //カウンタの値を HTML 内の counter に表示
        document.getElementById("childOfWereWolfCount").innerHTML = childOfWereWolfCount + "人";
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "childOfWereWolfParent" + childOfWereWolfCount);
        div_element.innerHTML = '<div class="name-box name-box-werewolf-team"><input type="text" class="name-input" value="●人狼(子)："></div>';
        var parent_object = document.getElementById("nameBoxDiv");
        parent_object.appendChild(div_element);
        $('.name-box').draggable();
    }

}

function childOfWereWolfCountDown(){

    switch(childOfWereWolfCount) {
        
        case 1:
        childOfWereWolfCount--;
        $("#childOfWereWolfParent1").remove();
        document.getElementById("childOfWereWolfCount").innerHTML = childOfWereWolfCount + "人";
        break;

    }
    
}

//人狼の子供----------------------------------------------------------------------------------

//市民----------------------------------------------------------------------------------

var citizenCount = 0;

function citizenCountUp(){

    if (citizenCount >= 9) {
    } else {
        //カウンタに 1 を加算
        citizenCount++;
        //カウンタの値を HTML 内の counter に表示
        document.getElementById("citizenCount").innerHTML = citizenCount + "人";
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "citizenParent" + citizenCount);
        div_element.innerHTML = '<div class="name-box name-box-citizen-team"><input type="text" class="name-input" value="○市民："></div>';
        var parent_object = document.getElementById("nameBoxDiv");
        parent_object.appendChild(div_element);
        $('.name-box').draggable();
    }

}

function citizenCountDown(){

    switch(citizenCount) {
        
        case 1:
        citizenCount--;
        $("#citizenParent1").remove();
        document.getElementById("citizenCount").innerHTML = citizenCount + "人";
        break;

        case 2:
        citizenCount--;
        $("#citizenParent2").remove();
        document.getElementById("citizenCount").innerHTML = citizenCount + "人";
        break;

        case 3:
        citizenCount--;
        $("#citizenParent3").remove();
        document.getElementById("citizenCount").innerHTML = citizenCount + "人";
        break;

        case 4:
        citizenCount--;
        $("#citizenParent4").remove();
        document.getElementById("citizenCount").innerHTML = citizenCount + "人";
        break;

        case 5:
        citizenCount--;
        $("#citizenParent5").remove();
        document.getElementById("citizenCount").innerHTML = citizenCount + "人";
        break;

        case 6:
        citizenCount--;
        $("#citizenParent6").remove();
        document.getElementById("citizenCount").innerHTML = citizenCount + "人";
        break;

        case 7:
        citizenCount--;
        $("#citizenParent7").remove();
        document.getElementById("citizenCount").innerHTML = citizenCount + "人";
        break;

        case 8:
        citizenCount--;
        $("#citizenParent8").remove();
        document.getElementById("citizenCount").innerHTML = citizenCount + "人";
        break;

        case 9:
        citizenCount--;
        $("#citizenParent9").remove();
        document.getElementById("citizenCount").innerHTML = citizenCount + "人";
        break;
    }
    
}

//市民----------------------------------------------------------------------------------

//予言者----------------------------------------------------------------------------------

var prophetCount = 0;

function prophetCountUp(){

    if (prophetCount >= 2) {
    } else {
        //カウンタに 1 を加算
        prophetCount++;
        //カウンタの値を HTML 内の counter に表示
        document.getElementById("prophetCount").innerHTML = prophetCount + "人";
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "prophetParent" + prophetCount);
        div_element.innerHTML = '<div class="name-box name-box-citizen-team"><input type="text" class="name-input" value="○予言者："></div>';
        var parent_object = document.getElementById("nameBoxDiv");
        parent_object.appendChild(div_element);
        $('.name-box').draggable();
    }

}

function prophetCountDown(){

    switch(prophetCount) {
        
        case 1:
        prophetCount--;
        $("#prophetParent1").remove();
        document.getElementById("prophetCount").innerHTML = prophetCount + "人";
        break;

        case 2:
        prophetCount--;
        $("#prophetParent2").remove();
        document.getElementById("prophetCount").innerHTML = prophetCount + "人";
        break;
    }
    
}

//予言者----------------------------------------------------------------------------------

//霊媒師----------------------------------------------------------------------------------

var necromancerCount = 0;

function necromancerCountUp(){

    if (necromancerCount >= 2) {
    } else {
        //カウンタに 1 を加算
        necromancerCount++;
        //カウンタの値を HTML 内の counter に表示
        document.getElementById("necromancerCount").innerHTML = necromancerCount + "人";
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "necromancerParent" + necromancerCount);
        div_element.innerHTML = '<div class="name-box name-box-citizen-team"><input type="text" class="name-input" value="○霊媒師："></div>';
        var parent_object = document.getElementById("nameBoxDiv");
        parent_object.appendChild(div_element);
        $('.name-box').draggable();
    }

}

function necromancerCountDown(){

    switch(necromancerCount) {
        
        case 1:
        necromancerCount--;
        $("#necromancerParent1").remove();
        document.getElementById("necromancerCount").innerHTML = necromancerCount + "人";
        break;

        case 2:
        necromancerCount--;
        $("#necromancerParent2").remove();
        document.getElementById("necromancerCount").innerHTML = necromancerCount + "人";
        break;

    }
    
}

//霊媒師----------------------------------------------------------------------------------

//ボディーガード----------------------------------------------------------------------------------

var bodyGuardCount = 0;

function bodyGuardCountUp(){

    if (bodyGuardCount >= 2) {
    } else {
        //カウンタに 1 を加算
        bodyGuardCount++;
        //カウンタの値を HTML 内の counter に表示
        document.getElementById("bodyGuardCount").innerHTML = bodyGuardCount + "人";
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "bodyGuardParent" + bodyGuardCount);
        div_element.innerHTML = '<div class="name-box name-box-citizen-team"><input type="text" class="name-input" value="○ボディーガード："></div>';
        var parent_object = document.getElementById("nameBoxDiv");
        parent_object.appendChild(div_element);
        $('.name-box').draggable();
    }

}

function bodyGuardCountDown(){

    switch(bodyGuardCount) {
        
        case 1:
        bodyGuardCount--;
        $("#bodyGuardParent1").remove();
        document.getElementById("bodyGuardCount").innerHTML = bodyGuardCount + "人";
        break;

        case 2:
        bodyGuardCount--;
        $("#bodyGuardParent2").remove();
        document.getElementById("bodyGuardCount").innerHTML = bodyGuardCount + "人";
        break;

    }
    
}

//ボディーガード----------------------------------------------------------------------------------

//共有者----------------------------------------------------------------------------------

var twinsCount = 0;

function twinsCountUp(){

    if (twinsCount >= 2) {
    } else {
        //カウンタに 1 を加算
        twinsCount++;
        //カウンタの値を HTML 内の counter に表示
        document.getElementById("twinsCount").innerHTML = twinsCount + "人";
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "twinsParent" + twinsCount);
        div_element.innerHTML = '<div class="name-box name-box-citizen-team"><input type="text" class="name-input" value="○共有者："></div>';
        var parent_object = document.getElementById("nameBoxDiv");
        parent_object.appendChild(div_element);
        $('.name-box').draggable();
    }

}

function twinsCountDown(){

    switch(twinsCount) {
        
        case 1:
        twinsCount--;
        $("#twinsParent1").remove();
        document.getElementById("twinsCount").innerHTML = twinsCount + "人";
        break;

        case 2:
        twinsCount--;
        $("#twinsParent2").remove();
        document.getElementById("twinsCount").innerHTML = twinsCount + "人";
        break;

    }
    
}

//共有者----------------------------------------------------------------------------------

//裏切り者----------------------------------------------------------------------------------

var betrayerCount = 0;

function betrayerCountUp(){

    if (betrayerCount >= 2) {
    } else {
        //カウンタに 1 を加算
        betrayerCount++;
        //カウンタの値を HTML 内の counter に表示
        document.getElementById("betrayerCount").innerHTML = betrayerCount + "人";
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "betrayerParent" + betrayerCount);
        div_element.innerHTML = '<div class="name-box name-box-werewolf-team"><input type="text" class="name-input" value="○裏切り者："></div>';
        var parent_object = document.getElementById("nameBoxDiv");
        parent_object.appendChild(div_element);
        $('.name-box').draggable();
    }

}

function betrayerCountDown(){

    switch(betrayerCount) {
        
        case 1:
        betrayerCount--;
        $("#betrayerParent1").remove();
        document.getElementById("betrayerCount").innerHTML = betrayerCount + "人";
        break;

        case 2:
        betrayerCount--;
        $("#betrayerParent2").remove();
        document.getElementById("betrayerCount").innerHTML = betrayerCount + "人";
        break;

    }
    
}

//裏切り者----------------------------------------------------------------------------------

//恋人----------------------------------------------------------------------------------

var loversCount = 0;

function loversCountUp(){

    if (loversCount >= 2) {
    } else {
        //カウンタに 1 を加算
        loversCount++;
        //カウンタの値を HTML 内の counter に表示
        document.getElementById("loversCount").innerHTML = loversCount + "人";
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "loversParent" + loversCount);
        div_element.innerHTML = '<div class="name-box name-box-thaad-team"><input type="text" class="name-input" value="○恋人："></div>';
        var parent_object = document.getElementById("nameBoxDiv");
        parent_object.appendChild(div_element);
        $('.name-box').draggable();
    }

}

function loversCountDown(){

    switch(loversCount) {
        
        case 1:
        loversCount--;
        $("#loversParent1").remove();
        document.getElementById("loversCount").innerHTML = loversCount + "人";
        break;

        case 2:
        loversCount--;
        $("#loversParent2").remove();
        document.getElementById("loversCount").innerHTML = loversCount + "人";
        break;

    }
    
}

//恋人----------------------------------------------------------------------------------

//妖狐----------------------------------------------------------------------------------

var mythologicalFoxCount = 0;

function mythologicalFoxCountUp(){

    if (mythologicalFoxCount >= 1) {
    } else {
        //カウンタに 1 を加算
        mythologicalFoxCount++;
        //カウンタの値を HTML 内の counter に表示
        document.getElementById("mythologicalFoxCount").innerHTML = mythologicalFoxCount + "人";
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "mythologicalFoxParent" + mythologicalFoxCount);
        div_element.innerHTML = '<div class="name-box name-box-thaad-team"><input type="text" class="name-input" value="○妖狐："></div>';
        var parent_object = document.getElementById("nameBoxDiv");
        parent_object.appendChild(div_element);
        $('.name-box').draggable();
    }

}

function mythologicalFoxCountDown(){

    switch(mythologicalFoxCount) {
        
        case 1:
        mythologicalFoxCount--;
        $("#mythologicalFoxParent1").remove();
        document.getElementById("mythologicalFoxCount").innerHTML = mythologicalFoxCount + "人";
        break;

    }
    
}

//妖狐----------------------------------------------------------------------------------


//【追加】市民陣営----------------------------------------------------------------------------------

var citizenSpareCount = 0;

function citizenSpareCountUp(){

    if (citizenSpareCount >= 3) {
    } else {
        //カウンタに 1 を加算
        citizenSpareCount++;
        //カウンタの値を HTML 内の counter に表示
        document.getElementById("citizenSpareCount").innerHTML = citizenSpareCount + "人";
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "citizenSpareParent" + citizenSpareCount);
        div_element.innerHTML = '<div class="name-box name-box-citizen-team"><input type="text" class="name-input" value="："></div>';
        var parent_object = document.getElementById("nameBoxDiv");
        parent_object.appendChild(div_element);
        $('.name-box').draggable();
    }

}

function citizenSpareCountDown(){

    switch(citizenSpareCount) {
        
        case 1:
        citizenSpareCount--;
        $("#citizenSpareParent1").remove();
        document.getElementById("citizenSpareCount").innerHTML = citizenSpareCount + "人";
        break;

        case 2:
        citizenSpareCount--;
        $("#citizenSpareParent2").remove();
        document.getElementById("citizenSpareCount").innerHTML = citizenSpareCount + "人";
        break;

        case 3:
        citizenSpareCount--;
        $("#citizenSpareParent3").remove();
        document.getElementById("citizenSpareCount").innerHTML = citizenSpareCount + "人";
        break;

    }
    
}

//------------------------------------------------------------------------------------------------

//【追加】人狼陣営----------------------------------------------------------------------------------
var wereWolfSpareCount = 0;

function wereWolfSpareCountUp(){

    if (wereWolfSpareCount >= 3) {
    } else {
        //カウンタに 1 を加算
        wereWolfSpareCount++;
        //カウンタの値を HTML 内の counter に表示
        document.getElementById("wereWolfSpareCount").innerHTML = wereWolfSpareCount + "人";
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "wereWolfSpareParent" + wereWolfSpareCount);
        div_element.innerHTML = '<div class="name-box name-box-werewolf-team"><input type="text" class="name-input" value="："></div>';
        var parent_object = document.getElementById("nameBoxDiv");
        parent_object.appendChild(div_element);
        $('.name-box').draggable();
    }

}

function wereWolfSpareCountDown(){

    switch(wereWolfSpareCount) {
        
        case 1:
        wereWolfSpareCount--;
        $("#wereWolfSpareParent1").remove();
        document.getElementById("wereWolfSpareCount").innerHTML = wereWolfSpareCount + "人";
        break;

        case 2:
        wereWolfSpareCount--;
        $("#wereWolfSpareParent2").remove();
        document.getElementById("wereWolfSpareCount").innerHTML = wereWolfSpareCount + "人";
        break;

        case 3:
        wereWolfSpareCount--;
        $("#wereWolfSpareParent3").remove();
        document.getElementById("wereWolfSpareCount").innerHTML = wereWolfSpareCount + "人";
        break;

    }
    
}

//------------------------------------------------------------------------------------------------

//【追加】第三陣営----------------------------------------------------------------------------------
var thaadSpareCount = 0;

function thaadSpareCountUp(){

    if (thaadSpareCount >= 3) {
    } else {
        //カウンタに 1 を加算
        thaadSpareCount++;
        //カウンタの値を HTML 内の counter に表示
        document.getElementById("thaadSpareCount").innerHTML = thaadSpareCount + "人";
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "thaadSpareParent" + thaadSpareCount);
        div_element.innerHTML = '<div class="name-box name-box-thaad-team"><input type="text" class="name-input" value="："></div>';
        var parent_object = document.getElementById("nameBoxDiv");
        parent_object.appendChild(div_element);
        $('.name-box').draggable();
    }

}

function thaadSpareCountDown(){

    switch(thaadSpareCount) {
        
        case 1:
        thaadSpareCount--;
        $("#thaadSpareParent1").remove();
        document.getElementById("thaadSpareCount").innerHTML = thaadSpareCount + "人";
        break;

        case 2:
        thaadSpareCount--;
        $("#thaadSpareParent2").remove();
        document.getElementById("thaadSpareCount").innerHTML = thaadSpareCount + "人";
        break;

        case 3:
        thaadSpareCount--;
        $("#thaadSpareParent3").remove();
        document.getElementById("thaadSpareCount").innerHTML = thaadSpareCount + "人";
        break;

    }
    
}

//------------------------------------------------------------------------------------------------

//席----------------------------------------------------------------------------------

function seatCount() {
    //役職ごとのグローバルスコープを設定
    valGlobalWereWolfCount = "wereWolfCount";
    valGlobalChildOfWereWolfCount = "childOfWereWolfCount";
    valGlobalCitizenCount = "citizenCount";
    varGlobalProphetCount = "prophetCount";
    varGlobalNecromancerCount = "necromancerCount";
    varGlobalBodyGuardCount = "bodyGuardCount";
    varGlobalTwinsCount = "twinsCount";
    varGlobalBetrayerCount = "betrayerCount";
    verGlobalLoversCount = "loversCount";
    verGlobalMythologicalFoxCount = "mythologicalFoxCount";
    verGlobalCitizenSpareCount = "citizenSpareCount";
    verGlobalWereWolfSpareCount = "wereWolfSpareCount";
    verGlobalthaadSpareCount = "thaadSpareCount";
    //seatに人数を足す
    var seat = wereWolfCount + childOfWereWolfCount + citizenCount + prophetCount + necromancerCount + bodyGuardCount + twinsCount + betrayerCount + loversCount + mythologicalFoxCount + citizenSpareCount + wereWolfSpareCount + thaadSpareCount;
    //htmlに書き込む
    document.getElementById("seatIconCount").innerHTML = seat + "人";

    //アイコンをセットする
    for (var i = 0; i < seat; i++) {
        //プレイヤーボックスの追加
        var div_element = document.createElement("span");
        //親要素のdivに「id+カウント数」を追加
        div_element.setAttribute("id", "seatIconCoutnParent");
        div_element.innerHTML = '<div class="seat-icon"></div>';
        var parent_object = document.getElementById("seatIconDiv");
        parent_object.appendChild(div_element);
        $('.seat-icon').draggable();
    }

}

//------------------------------------------------------------------------------------------------
