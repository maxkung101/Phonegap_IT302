document.addEventListener("deviceready", onDeviceReady(), false);

function onDeviceReady() {
    //alert("ready");
    db = window.openDatabase("loginintro", "1.0", "loginintro", 1000000);
    db.transaction(populateDB, errorCB, successCB);
    checkConnection();
}
function checkConnection()
{   alert("connection");
	var network = navigator.connection.type;

    alert("fdfd");
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';
    alert('Connection type: ' + states[network]);
	if (network == Connection.NONE) {
		preventDefault();
		alert("Error: No connection available");
	}
}
