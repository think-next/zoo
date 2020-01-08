'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/discover', 'pages/goals', 'pages/mine'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'Goals',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: '#a9b7b7',
        selectedColor: '#11cd6e',
        borderStyle: 'black',
        list: [{
          pagePath: 'pages/discover',
          text: '发现'
        }, {
          pagePath: 'pages/goals',
          text: '计划'
        }, {
          pagePath: 'pages/mine',
          text: '我的'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInRlc3RBc3luYyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0Iiwid2VweSIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7Ozs7O0FBb0NFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFqQ2RDLE1BaUNjLEdBakNMO0FBQ1BDLGFBQU8sQ0FDTCxnQkFESyxFQUVMLGFBRkssRUFHTCxZQUhLLENBREE7QUFNUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLE9BSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQU5EO0FBWVBDLGNBQVE7QUFDTkMsZUFBTyxTQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkMscUJBQWEsT0FIUDtBQUlOQyxjQUFNLENBQUM7QUFDTEMsb0JBQVUsZ0JBREw7QUFFTEMsZ0JBQU07QUFGRCxTQUFELEVBR0g7QUFDREQsb0JBQVUsYUFEVDtBQUVEQyxnQkFBTTtBQUZMLFNBSEcsRUFNSDtBQUNERCxvQkFBVSxZQURUO0FBRURDLGdCQUFNO0FBRkwsU0FORztBQUpBO0FBWkQsS0FpQ0s7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRlk7QUFHYjs7OzsrQkFFVTtBQUNULFdBQUtDLFNBQUw7QUFDRDs7OzBCQUVLQyxDLEVBQUc7QUFDUCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR1VHLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS2QsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0RjLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGVBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYSixlQUFLZCxVQUFMLENBQWdCQyxRQUFoQixHQUEyQmlCLElBQUlqQixRQUEvQjtBQUNBWSxnQkFBTUEsR0FBR0ssSUFBSWpCLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQW5FMEJjLGVBQUtJLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuICBpbXBvcnQgeyBzZXRTdG9yZSB9IGZyb20gJ3dlcHktcmVkdXgnXG4gIGltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuL3N0b3JlJ1xuXG4gIGNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKVxuICBzZXRTdG9yZShzdG9yZSlcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBwYWdlczogW1xuICAgICAgICAncGFnZXMvZGlzY292ZXInLFxuICAgICAgICAncGFnZXMvZ29hbHMnLFxuICAgICAgICAncGFnZXMvbWluZSdcbiAgICAgIF0sXG4gICAgICB3aW5kb3c6IHtcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnR29hbHMnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgICB9LFxuICAgICAgdGFiQmFyOiB7XG4gICAgICAgIGNvbG9yOiAnI2E5YjdiNycsXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMTFjZDZlJyxcbiAgICAgICAgYm9yZGVyU3R5bGU6ICdibGFjaycsXG4gICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9kaXNjb3ZlcicsXG4gICAgICAgICAgdGV4dDogJ+WPkeeOsCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvZ29hbHMnLFxuICAgICAgICAgIHRleHQ6ICforqHliJInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21pbmUnLFxuICAgICAgICAgIHRleHQ6ICfmiJHnmoQnXG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiBudWxsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpXG4gICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgfVxuXG4gICAgb25MYXVuY2goKSB7XG4gICAgICB0aGlzLnRlc3RBc3luYygpXG4gICAgfVxuXG4gICAgc2xlZXAocykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gICAgICAgIH0sIHMgKiAxMDAwKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyB0ZXN0QXN5bmMoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG5cbiAgICBnZXRVc2VySW5mbyhjYikge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgICAgfVxuICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19