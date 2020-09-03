import React, { useEffect } from 'react';

export default function Canvas({ perpendicular, base }) {

  const maxLength = 400;
  const startPoint = 20;
  
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
    draw(result.height, result.width)
  }, [perpendicular, base]);
  
  const draw = (height, width) => {
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

  }


	return <canvas id="triangle" width="500" height="500"></canvas>;
}
