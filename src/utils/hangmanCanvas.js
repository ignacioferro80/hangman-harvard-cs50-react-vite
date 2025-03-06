export const drawHangmanLine = (bord, darkMode) => {

    bord.lineWidth = 6;
    bord.lineCap = "round";
    bord.lineJoin = "round";
    if(darkMode) {
            bord.strokeStyle = "#bbacd1";
    }
    else {
        bord.strokeStyle = "#070b44";
    }

    bord.beginPath();
    bord.moveTo(480,250);
    bord.lineTo(720,250);
    bord.stroke();
    bord.closePath();

}

export const drawHanger = (bord, darkMode) => {

    bord.lineWidth = 6;
    bord.lineCap = "round";
    bord.lineJoin = "round";
    if(darkMode) {
        bord.strokeStyle = "#bbacd1";
    }
    else {
        bord.strokeStyle = "#070b44";
    }

    bord.beginPath();
    bord.moveTo(500,250);
    bord.lineTo(500,70);
    bord.stroke();
    bord.closePath();

    bord.beginPath();
    bord.lineTo(500,70);
    bord.lineTo(590,70);
    bord.stroke();
    bord.closePath();

    bord.beginPath();
    bord.moveTo(590,70);
    bord.lineTo(590,90);
    bord.stroke();
    bord.closePath();

}

export const drawHead = (bord, darkMode) => {
    bord.lineWidth = 6;
    bord.lineCap = "round";
    bord.lineJoin = "round";
    if(darkMode) {
        bord.fillStyle = "#bbacd1";
        bord.strokeStyle = "#bbacd1";
    }
    else {
        bord.strokeStyle = "#070b44";
        bord.fillStyle = "#070b44";
    }

    bord.moveTo(590,120);
    bord.arc(590,120,30,0,2*Math.PI);
    bord.fill();
    bord.closePath();
}

export const drawBody = (bord, darkMode) => {

    bord.lineWidth = 6;
    bord.lineCap = "round";
    bord.lineJoin = "round";
    if(darkMode) {
        bord.strokeStyle = "#bbacd1";
    }
    else {
        bord.strokeStyle = "#070b44";
    }

    bord.beginPath();
    bord.moveTo(590,140);
    bord.lineTo(590,180);
    bord.stroke();
    bord.closePath();

}

export const drawLeftLeg = (bord, darkMode) => {
    bord.lineWidth = 6;
    bord.lineCap = "round";
    bord.lineJoin = "round";
    if(darkMode) {
        bord.strokeStyle = "#bbacd1";
    }
    else {
        bord.strokeStyle = "#070b44";
    }

    bord.beginPath();
    bord.moveTo(590,180);
    bord.lineTo(570,220);
    bord.stroke();
    bord.closePath();

}

export const drawRightLeg = (bord, darkMode) => {
    bord.lineWidth = 6;
    bord.lineCap = "round";
    bord.lineJoin = "round";
    if(darkMode) {
        bord.strokeStyle = "#bbacd1";
    }
    else {
        bord.strokeStyle = "#070b44";
    }

    bord.beginPath();
    bord.moveTo(590,180);
    bord.lineTo(610,220);
    bord.stroke();
    bord.closePath();
}

export const drawLeftArm = (bord, darkMode) => {
    bord.lineWidth = 6;
    bord.lineCap = "round";
    bord.lineJoin = "round";
    if(darkMode) {
        bord.strokeStyle = "#bbacd1";
    }
    else {
        bord.strokeStyle = "#070b44";
    }

    bord.beginPath();
    bord.moveTo(590,140);
    bord.lineTo(570,180);
    bord.stroke();
    bord.closePath();
}

export const drawRightArm = (bord, darkMode) => {
    bord.lineWidth = 6;
    bord.lineCap = "round";
    bord.lineJoin = "round";
    if(darkMode) {
        bord.strokeStyle = "#bbacd1";
    }
    else {
        bord.strokeStyle = "#070b44";
    }

    bord.beginPath();
    bord.moveTo(590,140);
    bord.lineTo(610,180);
    bord.stroke();
    bord.closePath();
}

export const drawArrow = (bord, darkMode) => {
    bord.lineWidth = 6;
    bord.lineCap = "round";
    bord.lineJoin = "round";
    if(darkMode) {
        bord.strokeStyle = "#bbacd1";
    }
    else {
        bord.strokeStyle = "#070b44";
    }

    bord.beginPath();
    bord.moveTo(540,150);
    bord.lineTo(645,150);
    bord.stroke();
    bord.closePath();

    bord.beginPath();
    bord.moveTo(645,150);
    bord.lineTo(625,140);
    bord.stroke();
    bord.closePath();

    bord.beginPath();
    bord.moveTo(645,150);
    bord.lineTo(625,160);
    bord.stroke();
    bord.closePath();
}

export const drawHangmanWith_Errors = (errors, bord, darkMode) => {
    
    if(errors == 7){
        drawHanger(bord, darkMode)
    }

    else if(errors == 6){
        drawHead(bord, darkMode)
    }

    else if(errors == 5){
        drawBody(bord, darkMode)
    }

    else if(errors == 4){
        drawLeftLeg(bord, darkMode)
    }

    else if(errors == 3){
        drawRightLeg(bord, darkMode)
    }

    else if(errors == 2){
        drawLeftArm(bord, darkMode)
    }

    else if(errors == 1){
        drawRightArm(bord, darkMode)
    }
    
    else {
        drawArrow(bord, darkMode)
    }
    
}