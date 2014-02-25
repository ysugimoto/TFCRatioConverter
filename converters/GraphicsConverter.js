var GraphicsMap = {};

GraphicsMap.arc                       = require('./graphics/Arc');
GraphicsMap.arcTo                     = require('./graphics/ArcTo');
GraphicsMap.beginLinearGradientFill   = require('./graphics/BeginLinearGradientFill');
GraphicsMap.beginLinearGradientStroke = require('./graphics/BeginLinearGradientStroke');
GraphicsMap.beginRadialGradientFill   = require('./graphics/BeginRadialGradientFill');
GraphicsMap.beginRadialGradientStroke = require('./graphics/BeginRadialGradientStroke');
GraphicsMap.bezierCurveTo             = require('./graphics/BezierCurveTo');
GraphicsMap.quadraticCurveTo          = require('./graphics/QuadraticCurveTo');
GraphicsMap.decodePath                = require('./graphics/DecodePath');
GraphicsMap.lineTo                    = require('./graphics/LineTo');
GraphicsMap.moveTo                    = require('./graphics/MoveTo');
GraphicsMap.rect                      = require('./graphics/Rect');
GraphicsMap.drawCircle                = require('./graphics/DrawCircle');
GraphicsMap.drawEllipse               = require('./graphics/DrawEllipse');
GraphicsMap.drawPolyStar              = require('./graphics/DrawPolyStar');
GraphicsMap.drawRect                  = require('./graphics/DrawRect');
GraphicsMap.drawRoundRect             = require('./graphics/DrawRoundRect');
GraphicsMap.drawRoundRectComplex      = require('./graphics/DrawRoundRectComplex');

module.exports = GraphicsMap;
