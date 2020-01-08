'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Authorize = function (_wepy$page) {
  _inherits(Authorize, _wepy$page);

  function Authorize() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Authorize);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Authorize.__proto__ || Object.getPrototypeOf(Authorize)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'navigationBarTitleText': '授权登录'
    }, _this.data = {
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Authorize, [{
    key: 'bindGetUserInfo',
    value: function bindGetUserInfo(e) {
      if (e.detail.userInfo) {
        console.log(e.detail);
      } else {
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
          showCancel: false,
          confirmText: '返回授权',
          success: function success(res) {
            if (res.confirm) {
              console.log('用户点击了“返回授权”');
            }
          }
        });
      }
    }
  }]);

  return Authorize;
}(_wepy2.default.page);

exports.default = Authorize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6ZS5qcyJdLCJuYW1lcyI6WyJBdXRob3JpemUiLCJjb25maWciLCJkYXRhIiwiY2FuSVVzZSIsInd4IiwiZSIsImRldGFpbCIsInVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1AsZ0NBQTBCO0FBRG5CLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVNDLEdBQUdELE9BQUgsQ0FBVyw4QkFBWDtBQURKLEs7Ozs7O29DQUlTRSxDLEVBQUc7QUFDakIsVUFBSUEsRUFBRUMsTUFBRixDQUFTQyxRQUFiLEVBQXVCO0FBQ3JCQyxnQkFBUUMsR0FBUixDQUFZSixFQUFFQyxNQUFkO0FBQ0QsT0FGRCxNQUVPO0FBQ0xGLFdBQUdNLFNBQUgsQ0FBYTtBQUNYQyxpQkFBTyxJQURJO0FBRVhDLG1CQUFTLCtCQUZFO0FBR1hDLHNCQUFZLEtBSEQ7QUFJWEMsdUJBQWEsTUFKRjtBQUtYQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGdCQUFJQSxJQUFJQyxPQUFSLEVBQWlCO0FBQ2ZULHNCQUFRQyxHQUFSLENBQVksYUFBWjtBQUNEO0FBQ0Y7QUFUVSxTQUFiO0FBV0Q7QUFDRjs7OztFQXhCb0NTLGVBQUtDLEk7O2tCQUF2Qm5CLFMiLCJmaWxlIjoiYXV0aG9yaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yaXplIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICfmjojmnYPnmbvlvZUnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJylcbiAgICB9XG5cbiAgICBiaW5kR2V0VXNlckluZm8oZSkge1xuICAgICAgaWYgKGUuZGV0YWlsLnVzZXJJbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+itpuWRiicsXG4gICAgICAgICAgY29udGVudDogJ+aCqOeCueWHu+S6huaLkue7neaOiOadg++8jOWwhuaXoOazlei/m+WFpeWwj+eoi+W6j++8jOivt+aOiOadg+S5i+WQjuWGjei/m+WFpSEhIScsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgY29uZmlybVRleHQ6ICfov5Tlm57mjojmnYMnLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vkuobigJzov5Tlm57mjojmnYPigJ0nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==