'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('moduleA ignored: ', _moduleA2.default); // => moduleA ignored: {}

var Index = (_dec = (0, _wepyRedux.connect)({
  num: function num(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  },
  sumNum: function sumNum(state) {
    return state.counter.num + state.counter.asyncNum;
  }
}), _dec(_class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page)) || _class);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: 'test'
  };
  this.$repeat = {};
  this.$props = { "counter1": { "xmlns:v-on": "" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" }, "group": { "xmlns:v-bind": "", "v-bind:grouplist.once": "item", "v-bind:indexa.once": "mine.wpy" } };
  this.$events = { "counter1": { "v-on:index-emit": "counterEmit" } };
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    mynum: 20,
    userInfo: {
      nickName: '加载中...'
    },
    normalTitle: '原始标题',
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });

      promise.then(function (d) {
        console.log('toast done');
      });
    },
    tap: function tap() {
      console.log('do noting from ' + this.$name);
    },
    communicate: function communicate() {
      console.log(this.$name + ' tap');

      this.$invoke('counter2', 'minus', 45, 6);
      this.$invoke('counter1', 'plus', 45, 6);

      this.$broadcast('index-broadcast', 1, 3, 4);
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
      while (i--) {
        _wepy2.default.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            self.netrst += d.data + '.';
            self.$apply();
          }
        });
      }
    },
    counterEmit: function counterEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVBIiwiSW5kZXgiLCJudW0iLCJzdGF0ZSIsImNvdW50ZXIiLCJhc3luY051bSIsInN1bU51bSIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsIm5vcm1hbFRpdGxlIiwic2V0VGltZW91dFRpdGxlIiwic2V0VGltZW91dCIsIiRhcHBseSIsIndlcHkiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiUGFuZWwiLCJjb3VudGVyMSIsIkNvdW50ZXIiLCJjb3VudGVyMiIsImxpc3QiLCJMaXN0IiwiZ3JvdXAiLCJHcm91cCIsInRvYXN0IiwiVG9hc3QiLCJtaXhpbnMiLCJ0ZXN0TWl4aW4iLCJkYXRhIiwibXludW0iLCJuaWNrTmFtZSIsImNvdW50IiwibmV0cnN0IiwiZ3JvdXBMaXN0IiwiaWQiLCJuYW1lIiwiY2hpbGRpZCIsImNoaWxkbmFtZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJwbHVzIiwicHJvbWlzZSIsIiRpbnZva2UiLCJ0aXRsZSIsImltZyIsInRoZW4iLCJkIiwidGFwIiwiJG5hbWUiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJyZXF1ZXN0IiwiaSIsIm1hcCIsInVybCIsInN1Y2Nlc3MiLCJjb3VudGVyRW1pdCIsIiRldmVudCIsImxlbmd0aCIsInNvdXJjZSIsImV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUd5QztBQUNUO0FBQ1E7QUFDUDs7O0FBTC9COzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBQSxRQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNDLGlCQUFqQyxFLENBQTBD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RCxpQkFBS2lDLE1BQUwsSUFBZWdCLEVBQUVwQixJQUFGLEdBQVMsR0FBeEI7QUFDQTdCLGlCQUFLTyxNQUFMO0FBQ0Q7QUFMVSxTQUFiO0FBT0Q7QUFDRixLQXRDTztBQXVDUm9ELGVBdkNRLHlCQXVDYTtBQUFBOztBQUNuQixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQXRFLGNBQVFDLEdBQVIsQ0FBZSxLQUFLMkQsS0FBcEIsaUJBQXFDUyxPQUFPeEIsSUFBNUMsY0FBeUR3QixPQUFPRSxNQUFQLENBQWNYLEtBQXZFO0FBQ0Q7QUExQ08sRztPQTZDVlksTSxHQUFTO0FBQ1Asa0JBQWMscUJBQWE7QUFBQTs7QUFDekIsVUFBSUgsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0F0RSxjQUFRQyxHQUFSLENBQWUsT0FBSzJELEtBQXBCLGlCQUFxQ1MsT0FBT3hCLElBQTVDLGNBQXlEd0IsT0FBT0UsTUFBUCxDQUFjWCxLQUF2RTtBQUNEO0FBSk0sRzs7O2tCQTVIVXpELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG4gIGltcG9ydCBQYW5lbCBmcm9tICdAL2NvbXBvbmVudHMvcGFuZWwnIC8vIGFsaWFzIGV4YW1wbGVcbiAgaW1wb3J0IENvdW50ZXIgZnJvbSAnY291bnRlcicgLy8gYWxpYXMgZXhhbXBsZVxuICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnIC8vIGFsaWFzRmllbGRzIGV4YW1wbGVcbiAgaW1wb3J0IG1vZHVsZUEgZnJvbSAnbW9kdWxlLWEnIC8vIGFsaWFzRmllbGRzIGlnbm9yZSBtb2R1bGUgZXhhbXBsZVxuICBpbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCdcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGNvbnNvbGUubG9nKCdtb2R1bGVBIGlnbm9yZWQ6ICcsIG1vZHVsZUEpIC8vID0+IG1vZHVsZUEgaWdub3JlZDoge31cblxuICBAY29ubmVjdCh7XG4gICAgbnVtKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW1cbiAgICB9LFxuICAgIGFzeW5jTnVtKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5hc3luY051bVxuICAgIH0sXG4gICAgc3VtTnVtKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW0gKyBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtXG4gICAgfVxuICB9KVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdCdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImNvdW50ZXIxXCI6e1wieG1sbnM6di1vblwiOlwiXCJ9LFwiY291bnRlcjJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm51bS5zeW5jXCI6XCJteW51bVwifSxcImdyb3VwXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpncm91cGxpc3Qub25jZVwiOlwiaXRlbVwiLFwidi1iaW5kOmluZGV4YS5vbmNlXCI6XCJpbmRleFwifX07XHJcbiRldmVudHMgPSB7XCJjb3VudGVyMVwiOntcInYtb246aW5kZXgtZW1pdFwiOlwiY291bnRlckVtaXRcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHBhbmVsOiBQYW5lbCxcbiAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxuICAgICAgY291bnRlcjI6IENvdW50ZXIsXG4gICAgICBsaXN0OiBMaXN0LFxuICAgICAgZ3JvdXA6IEdyb3VwLFxuICAgICAgdG9hc3Q6IFRvYXN0XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICBteW51bTogMjAsXG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgIH0sXG4gICAgICBub3JtYWxUaXRsZTogJ+WOn+Wni+agh+mimCcsXG4gICAgICBzZXRUaW1lb3V0VGl0bGU6ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknLFxuICAgICAgY291bnQ6IDAsXG4gICAgICBuZXRyc3Q6ICcnLFxuICAgICAgZ3JvdXBMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjEnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjMnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4yJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4zJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzMuMScsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdygpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHBsdXMoKSB7XG4gICAgICAgIHRoaXMubXludW0rK1xuICAgICAgfSxcbiAgICAgIHRvYXN0KCkge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXG4gICAgICAgICAgaW1nOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tpaW5sYW0vd2V0b2FzdC9tYXN0ZXIvaW1hZ2VzL3N0YXIucG5nJ1xuICAgICAgICB9KVxuXG4gICAgICAgIHByb21pc2UudGhlbigoZCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCBkb25lJylcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0YXAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkbyBub3RpbmcgZnJvbSAnICsgdGhpcy4kbmFtZSlcbiAgICAgIH0sXG4gICAgICBjb21tdW5pY2F0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcblxuICAgICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIyJywgJ21pbnVzJywgNDUsIDYpXG4gICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjEnLCAncGx1cycsIDQ1LCA2KVxuXG4gICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnaW5kZXgtYnJvYWRjYXN0JywgMSwgMywgNClcbiAgICAgIH0sXG4gICAgICByZXF1ZXN0KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IGkgPSAxMFxuICAgICAgICBsZXQgbWFwID0gWydNQT09JywgJ01Rbz0nLCAnTWc9PScsICdNdz09JywgJ05BPT0nLCAnTlE9PScsICdOZz09JywgJ053PT0nLCAnT0E9PScsICdPUT09J11cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArIG1hcFtpXSArICcmaT0nICsgaSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgc2VsZi5uZXRyc3QgKz0gZC5kYXRhICsgJy4nXG4gICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY291bnRlckVtaXQoLi4uYXJncykge1xuICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uKHVzZXJJbmZvKSB7XG4gICAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICB9XG4gICAgICAgIHNlbGYubm9ybWFsVGl0bGUgPSAn5qCH6aKY5bey6KKr5L+u5pS5J1xuXG4gICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuSdcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5Yiw5LiJ56eS5LqGJ1xuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfSwgMzAwMClcblxuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19
