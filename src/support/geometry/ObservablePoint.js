/*
|--------------------------------------------------------------------------
| ObservablePoint
|--------------------------------------------------------------------------
|
| This file defines the ObservablePoint Object.
| This object build a PIXI.ObservablePoint for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

ObservablePoint = class ObservablePoint
{
	/**
	* constructor
	* This function is used in order to build an ObservablePoint.
	* @param   {Function}   onMove         Callback when the point's position is changed.
	* @param   {Object}   scope         Owner of callback.
	* @param   {Number}   x         Position of the point on the x axis.
	* @param   {Number}   y         Position of the point on the y axis
	* @param   {PIXI.ObservablePoint}   onMove         The Pixi object to build the HandyPixi object.
	*/
	constructor(onMove, scope, x, y)
	{
		if (onMove instanceof PIXI.ObservablePoint)
			this._out = onMove;
		else 
			this._out = new PIXI.ObservablePoint(onMove, scope, x, y);
	}

	/**
	* getOut
	* This function is a getter for the member _out.
	* @return  {PIXI.ObservablePoint} The PIXI Object used by this object. 
	*/
	getOut()
	{
		return this._out;
	}

	/**
	* getX
	* This function is a getter for the member x.
	* @return  {Number} Position of the point on the x axis. 
	*/
	getX()
	{
		return this._out.x;
	}

	/**
	* setX
	* This function is a setter for the member x.
	* @param  {Number} 	x 	 Position of the point on the x axis. 
	*/
	setX(x)
	{
		this._out.x = x;
	}

	/**
	* getY
	* This function is a getter for the member y.
	* @return  {Number} Position of the point on the y axis. 
	*/
	getY()
	{
		return this._out.y;
	}

	/**
	* setY
	* This function is a setter for the member y.
	* @param  {Number} 	y  Position of the point on the y axis. 
	*/
	setY(y)
	{
		this._out.y = y;
	}

	/**
	* set
	* This function is a setter for the members x and y.
	* @param  {Number}	x 	Position of the point on the x axis. 
	* @param  {Number}	y 	Position of the point on the y axis.
	*/
	set(x, y)
	{
		this._out.x = x;
		this._out.y = y;
	}

	/**
	* copy
	* This function is used in order to copy the given ObservablePoint.
	* @param {ObservablePoint}	point 	The ObservablePoint to copy. 
	* @param {Point}	point 	The Point to copy. 
	*/
	copy(point)
	{
		this._out.copy(point.getOut());
	}
}

module.exports = 
{
	ObservablePoint: ObservablePoint,
};