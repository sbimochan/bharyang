import React, { useEffect } from 'react';

export default function Canvas({ perpendicular, base, hypotenuse }) {

  const maxLength = 400;
  const startPoint = 30;
  
	const getDimension = (height, width) => {
    const largeValue = height >= width ? height : width;
		const ratio = maxLength / largeValue;
		return {
			height: height * ratio,
			width: width * ratio,
		};
  }
  useEffect(()=> {
    const result = getDimension(perpendicular, base);
    draw(result.height, result.width, perpendicular, base, hypotenuse)
  }, [perpendicular, base, hypotenuse]);
  
  const draw = (height, width, perpendicular, base, hypotenuse) => {
    const canvasElement = document.querySelector('#triangle');
    const context = canvasElement.getContext('2d');

    context.beginPath();
    context.moveTo(startPoint, startPoint);
    context.lineTo(startPoint, height);
    context.lineTo(startPoint + width, height);
    context.closePath();
  
    // the outline
    context.lineWidth = 5;
    context.strokeStyle = '#666666';
    context.stroke();
  
    // the fill color
    context.fillStyle = '#FFCC00';
    context.fill();

    // text
    context.font = '20px serif';
    context.fillStyle = '#000';
    context.fillText(perpendicular, 5, startPoint + height/2)
    context.fillText(base, width/2, height + 25);
    context.fillText(hypotenuse, width/2, height/2)
  }


	return <canvas id="triangle" width="500" height="500"></canvas>;
}
