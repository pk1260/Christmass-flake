// Init the snowFlake
class SnowFlake {
    _svg = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t width="35.8px" height="35.8px" viewBox="0 0 35.8 35.8" style="enable-background:new 0 0 35.8 35.8;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<path d="M33.212,26.16l-3.054-1.764l1.84-1.062c0.238-0.139,0.32-0.441,0.184-0.684c-0.14-0.238-0.445-0.322-0.684-0.183\n' +
        '\t\tL29.16,23.82l-2.32-1.34l4.729-2.73c0.239-0.139,0.321-0.441,0.184-0.684c-0.139-0.238-0.445-0.322-0.684-0.183l-5.23,3.019\n' +
        '\t\tl-3.619-2.09l4.352-1.918l-4.354-1.919l3.619-2.091l5.231,3.021c0.079,0.047,0.165,0.067,0.25,0.067\n' +
        '\t\tc0.174,0,0.342-0.091,0.435-0.25c0.139-0.239,0.057-0.546-0.184-0.683l-4.731-2.732l2.32-1.34L31.5,13.32\n' +
        '\t\tc0.079,0.046,0.165,0.066,0.25,0.066c0.173,0,0.341-0.09,0.435-0.25c0.138-0.238,0.056-0.545-0.184-0.682L30.16,11.39l3.052-1.762\n' +
        '\t\tc0.239-0.139,0.32-0.443,0.184-0.684c-0.14-0.238-0.446-0.322-0.684-0.184l-3.051,1.763L29.66,8.401c0-0.275-0.225-0.5-0.5-0.5\n' +
        '\t\tc-0.276,0-0.5,0.225-0.5,0.5l0.001,2.699l-2.32,1.34l0.001-5.46c0-0.276-0.224-0.5-0.5-0.5c-0.275,0-0.5,0.224-0.5,0.5\n' +
        '\t\tl-0.001,6.037l-3.619,2.09l0.515-4.728l-3.838,2.81V9.008l5.229-3.021c0.238-0.138,0.32-0.443,0.184-0.684\n' +
        '\t\tc-0.14-0.238-0.445-0.321-0.684-0.182l-4.729,2.73V5.173l2.339-1.352c0.239-0.138,0.321-0.443,0.184-0.684\n' +
        '\t\tc-0.14-0.238-0.445-0.322-0.684-0.182L18.399,4.02V0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v3.523L15.56,2.961\n' +
        '\t\tc-0.24-0.141-0.545-0.057-0.683,0.184c-0.138,0.239-0.056,0.545,0.183,0.684l2.339,1.352v2.678l-4.729-2.73\n' +
        '\t\tc-0.24-0.14-0.545-0.057-0.683,0.184c-0.138,0.239-0.056,0.545,0.183,0.684l5.229,3.02v4.184l-3.837-2.811l0.514,4.729\n' +
        '\t\tl-3.621-2.092V6.989c0-0.276-0.224-0.5-0.5-0.5c-0.276,0-0.5,0.224-0.5,0.5v5.462l-2.318-1.34L7.136,8.41\n' +
        '\t\tc0-0.277-0.224-0.5-0.5-0.5c-0.276,0-0.5,0.223-0.5,0.5l0.001,2.125L3.084,8.771C2.845,8.63,2.539,8.714,2.401,8.955\n' +
        '\t\tC2.263,9.194,2.345,9.5,2.584,9.638L5.636,11.4l-1.839,1.062c-0.239,0.139-0.321,0.443-0.183,0.684\n' +
        '\t\tc0.093,0.16,0.261,0.25,0.434,0.25c0.085,0,0.171-0.021,0.25-0.066l2.339-1.351l2.319,1.339l-4.729,2.73\n' +
        '\t\tc-0.239,0.139-0.321,0.443-0.183,0.684c0.093,0.16,0.261,0.25,0.434,0.25c0.085,0,0.171-0.021,0.25-0.066l5.23-3.021l3.622,2.091\n' +
        '\t\tl-4.352,1.919l4.351,1.919l-3.621,2.09l-5.231-3.018c-0.241-0.138-0.545-0.058-0.683,0.184c-0.138,0.24-0.056,0.545,0.183,0.686\n' +
        '\t\tl4.731,2.729l-2.321,1.34l-2.338-1.352c-0.239-0.142-0.545-0.058-0.683,0.184c-0.138,0.238-0.056,0.545,0.183,0.684l1.838,1.062\n' +
        '\t\tl-3.05,1.76c-0.239,0.139-0.321,0.443-0.183,0.684c0.093,0.16,0.261,0.25,0.434,0.25c0.085,0,0.171-0.021,0.25-0.065l3.051-1.763\n' +
        '\t\tL6.14,27.4c0,0.276,0.224,0.5,0.5,0.5l0,0c0.276,0,0.5-0.225,0.5-0.5l-0.001-2.701l2.322-1.34l-0.002,5.463\n' +
        '\t\tc0,0.277,0.224,0.5,0.5,0.5s0.5-0.223,0.5-0.5l0.002-6.041l3.619-2.09l-0.514,4.729l3.837-2.81v4.183l-5.228,3.021\n' +
        '\t\tc-0.239,0.139-0.321,0.442-0.183,0.684c0.138,0.236,0.444,0.318,0.683,0.184l4.728-2.73v2.679l-2.339,1.353\n' +
        '\t\tc-0.239,0.139-0.321,0.442-0.183,0.684c0.138,0.236,0.444,0.32,0.683,0.184l1.839-1.062V35.3c0,0.274,0.224,0.5,0.5,0.5\n' +
        '\t\ts0.5-0.226,0.5-0.5v-3.524l1.841,1.062c0.079,0.046,0.165,0.066,0.25,0.066c0.174,0,0.342-0.09,0.435-0.25\n' +
        '\t\tc0.139-0.239,0.057-0.545-0.184-0.684l-2.341-1.354v-2.678l4.729,2.73c0.079,0.046,0.165,0.066,0.25,0.066\n' +
        '\t\tc0.174,0,0.342-0.09,0.435-0.25c0.139-0.239,0.057-0.545-0.184-0.684l-5.229-3.021V22.6l3.838,2.811l-0.514-4.729l3.62,2.09v6.039\n' +
        '\t\tc0,0.276,0.224,0.5,0.5,0.5c0.275,0,0.5-0.224,0.5-0.5V23.35l2.318,1.34l0.001,2.699c0,0.275,0.225,0.5,0.5,0.5s0.5-0.225,0.5-0.5\n' +
        '\t\tl-0.001-2.123l3.053,1.764c0.079,0.045,0.165,0.066,0.25,0.066c0.174,0,0.342-0.09,0.435-0.25\n' +
        '\t\tC33.536,26.604,33.454,26.296,33.212,26.16z M20.997,23.259l-2.6-1.901l-0.499-0.363l-0.501,0.365l-2.598,1.9l0.348-3.201\n' +
        '\t\tl0.067-0.615l-0.567-0.25l-2.945-1.299l2.946-1.299l0.566-0.25l-0.067-0.616l-0.348-3.2l2.598,1.901l0.5,0.364l0.5-0.365l2.6-1.901\n' +
        '\t\tl-0.349,3.201l-0.066,0.616l0.564,0.249l2.946,1.3l-2.944,1.299l-0.566,0.25l0.066,0.615L20.997,23.259z"/>\n' +
        '</g>\n' +
        '</svg>\n';


    // Create Constructor
    constructor(horizon, vertical, speed) {
        this._horizon = horizon;
        this._vertical = vertical;
        this._speed = speed;
    }
}