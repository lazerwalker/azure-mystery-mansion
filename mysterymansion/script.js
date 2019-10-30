if (!window.harlowe) {
    window.harlowe = { "State": State };
}

window.changeImage = function (image) {
    console.log("Changing image to " + image);
    document.getElementById("image").src = "https://lazerwalker.com/azure-mystery-mansion/" + image + ".jpg";
}

function createGUID() {
    //http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    // via http://s3-us-west-2.amazonaws.com/api-playfab-com-craft-files/FileAssets/index.html
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8; return v.toString(16); });
}

function getGUID() {
    if (window.localStorage && window.localStorage.GUID) {
        return window.localStorage.GUID
    } else {
        var guid = createGUID()
        if (window.localStorage) {
            window.localStorage.GUID = guid;
        }
        return guid;
    }
}

function logInWithPlayFab() {
    var guid = getGUID();
    PlayFab.settings.titleId = "2F970";

    PlayFabClientSDK.LoginWithCustomID({
        TitleId: PlayFab.settings.titleId,
        CustomId: guid,
        CreateAccount: true
    }, (response, error) => {
        if (error) {
            console.log("Login error", error);
        } else {
            console.log(response.data);
        }
    });
}

var url = "https://download.playfab.com/PlayFabClientApi.js";
$(function () {
    $.getScript(url,
        (data, textStatus, jqxhr) => {
            console.log("File load was performed.");
            logInWithPlayFab();
        }
    )
})
