(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/session.service */ "./src/app/service/session.service.ts");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(session) {
        this.session = session;
    }
    AdminComponent.prototype.ngOnInit = function () {
        console.log(this.session.getInfor());
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_style_class_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/style-class.service */ "./src/app/service/style-class.service.ts");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/session.service */ "./src/app/service/session.service.ts");
/* harmony import */ var _service_dao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/dao.service */ "./src/app/service/dao.service.ts");
/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/auth.guard */ "./src/app/service/auth.guard.ts");
/* harmony import */ var _service_len_check_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/len-check.pipe */ "./src/app/service/len-check.pipe.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var _main_sch_calendar_sch_calendar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/sch-calendar/sch-calendar.component */ "./src/app/main/sch-calendar/sch-calendar.component.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_simple_board_simple_board_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main/simple-board/simple-board.component */ "./src/app/main/simple-board/simple-board.component.ts");
/* harmony import */ var _main_file_board_file_board_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main/file-board/file-board.component */ "./src/app/main/file-board/file-board.component.ts");
/* harmony import */ var _main_drw_canvas_drw_canvas_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./main/drw-canvas/drw-canvas.component */ "./src/app/main/drw-canvas/drw-canvas.component.ts");
/* harmony import */ var _main_play_memory_play_memory_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./main/play-memory/play-memory.component */ "./src/app/main/play-memory/play-memory.component.ts");
/* harmony import */ var _main_control_user_control_user_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./main/control-user/control-user.component */ "./src/app/main/control-user/control-user.component.ts");




 //폼

 //라우터
 //스타일
 //세션
 //저장소
 //인터셉터

//파이어베이스




//Animation

//Drag & Drop


//file Drag & Drop

//color picker

//component









var router = [
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"] },
    { path: 'welcome', component: _index_index_component__WEBPACK_IMPORTED_MODULE_19__["IndexComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_21__["MainComponent"], canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];
var fireEnvironment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyAT59Nm90cVxZFa5HXCZl_OsWOgPrKNDS8",
        authDomain: "introduce-e531e.firebaseapp.com",
        databaseURL: "https://introduce-e531e.firebaseio.com",
        projectId: "introduce-e531e",
        storageBucket: "introduce-e531e.appspot.com",
        messagingSenderId: "737120364618"
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_19__["IndexComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_21__["MainComponent"],
                _service_len_check_pipe__WEBPACK_IMPORTED_MODULE_10__["LenCheckPipe"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                _main_simple_board_simple_board_component__WEBPACK_IMPORTED_MODULE_23__["SimpleBoardComponent"],
                _main_file_board_file_board_component__WEBPACK_IMPORTED_MODULE_24__["FileBoardComponent"],
                _main_sch_calendar_sch_calendar_component__WEBPACK_IMPORTED_MODULE_16__["SchCalendarComponent"],
                _main_drw_canvas_drw_canvas_component__WEBPACK_IMPORTED_MODULE_25__["DrwCanvasComponent"],
                _main_play_memory_play_memory_component__WEBPACK_IMPORTED_MODULE_26__["PlayMemoryComponent"],
                _main_control_user_control_user_component__WEBPACK_IMPORTED_MODULE_27__["ControlUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(router, { enableTracing: false }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(fireEnvironment.firebase, '/'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_15__["DragAndDropModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_17__["FileDropModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_18__["ColorPickerModule"]
            ],
            providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"], _service_dao_service__WEBPACK_IMPORTED_MODULE_8__["DaoService"], _service_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"], _service_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                _service_style_class_service__WEBPACK_IMPORTED_MODULE_6__["StyleClassService"], { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["FirestoreSettingsToken"], useValue: {} },
                { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["StorageBucket"], useValue: fireEnvironment.firebase.storageBucket }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

//npm i angular4-drag-drop --save ---->  Drag & Drop(Angular4)
//npm install --save angular-draggable-droppable  ---->  Drag & Drop(Angular6)
//npm install ngx-file-drop --save  ---->  Drag & Drop for file(Angular4)
//npm install ol    -> openlayers (Es6 style not angular module style)
//npm link ngx-color-picker         npm install ngx-color-picker --save


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='my_dropdwon-box'>\n\t<div class=\"my_dropdown\" [ngStyle]='ngMyStyle(whoIsActive.first)'>\n\t  <span>DashBoard</span>\n\t  <div class=\"my_dropdown-content\">\n\t\t<a (click)='gotoPage(1)'>Simple style</a>\n\t\t<a (click)='gotoPage(2)'>File upload</a>\n\t  </div>\n\t</div> \n\t<div class=\"my_dropdown\" [ngStyle]='ngMyStyle(whoIsActive.second)'>\n\t  <span>EventBoard</span>\n\t  <div class=\"my_dropdown-content\">\n\t\t<a (click)='gotoPage(3)'>Calendar</a>\n\t\t<a (click)='gotoPage(4)'>Canvas</a>\n\t  </div>\n\t</div> \n\t<div class=\"my_dropdown\" [ngStyle]='ngMyStyle(whoIsActive.third)' (click)='gotoPage(5)'>\n\t  <span>Gis</span>\n\t</div> \n\t<div class=\"my_dropdown\" [ngStyle]='ngMyStyle(whoIsActive.fourth)' (click)='gotoPage(6)'>\n\t  <span>User Control</span>\n\t</div> \n\t<div class=\"my_dropdown\" [ngStyle]='ngMyStyle(whoIsActive.fifth)' (click)='logOut()'>\n\t\t  <span>ID : {{INF.id}}</span>\n\t\t\t<div class='auth_icon'>{{INF.auth | slice:0:1}}</div>\n\t</div> \t\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_style_class_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/style-class.service */ "./src/app/service/style-class.service.ts");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/session.service */ "./src/app/service/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(styles, session, router) {
        this.styles = styles;
        this.session = session;
        this.router = router;
        this.sendToTarget = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.whoIsActive = {
            first: false,
            second: false,
            third: false,
            fourth: false,
            fifth: false
        };
        this.INF = session.getInfor();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.changeHeaderColor();
    };
    HeaderComponent.prototype.changeHeaderColor = function () {
        this.whoIsActive.first = false;
        this.whoIsActive.second = false;
        this.whoIsActive.third = false;
        this.whoIsActive.fourth = false;
        switch (this.activeType) {
            case 'first':
                this.whoIsActive.first = true;
                break;
            case 'second':
                this.whoIsActive.second = true;
                break;
            case 'third':
                this.whoIsActive.third = true;
                break;
            default:
                this.whoIsActive.fourth = true;
        }
    };
    HeaderComponent.prototype.ngMyStyle = function (myBoolean) {
        if (myBoolean) {
            return this.styles.header_style_active;
        }
        return this.styles.header_style_sleep;
    };
    HeaderComponent.prototype.gotoPage = function (type) {
        this.sendToTarget.emit(type);
        if (type == 1 || type == 2) {
            this.activeType = 'first';
        }
        else if (type == 3 || type == 4) {
            this.activeType = 'second';
        }
        else if (type == 5) {
            this.activeType = 'third';
        }
        else {
            this.activeType = 'fourth';
        }
        this.changeHeaderColor();
    };
    HeaderComponent.prototype.logOut = function () {
        if (confirm('To do Log out?')) {
            if (this.session.remove()) {
                this.router.navigateByUrl('welcome');
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "activeType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "sendToTarget", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_style_class_service__WEBPACK_IMPORTED_MODULE_2__["StyleClassService"], _service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style='text-align: center;'>\n  <div [ngStyle]=\"style.index_bd_style\">\n\n    <div [ngStyle]='style.log_in_head'>LogIn</div>\n\n    <div style='padding:15px;'>\n        <input type='text' [(ngModel)] = 'values.id' placeholder=\"Id\" [ngClass]=\"style.index_id_class\" [ngStyle]=\"style.index_id_style\"/>\n        <div [ngStyle]='style.index_pp_stype'>{{values.id | lenCheck}}</div>\n        <input type='password' [(ngModel)] = 'values.pwd' placeholder=\"Password\" [ngClass]=\"style.index_id_class\" [ngStyle]=\"style.index_id_style\"/>\n        <br>\n        <button class='btn btn-primary' (click)='tryToAccess()' style='width: 100%;margin-top : 8px;' >Access</button>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/dao.service */ "./src/app/service/dao.service.ts");
/* harmony import */ var _service_style_class_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/style-class.service */ "./src/app/service/style-class.service.ts");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/session.service */ "./src/app/service/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var IndexComponent = /** @class */ (function () {
    function IndexComponent(serv, serv2, session, router) {
        this.session = session;
        this.router = router;
        this.len = '';
        this.dao = serv;
        this.style = serv2;
        this.values = { id: '', pwd: '', time: '', auth: '' };
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.tryToAccess = function () {
        var _this = this;
        console.log(this.values);
        this.obj = this.dao.getItem('items', ['id', 'pwd'], [this.values.id, this.values.pwd], ['==', '==']);
        this.obj.forEach(function (val) {
            if (val.length > 0) {
                var ok = {
                    id: val[0].id,
                    pwd: 'OK',
                    time: new Date().toString(),
                    auth: val[0].auth
                };
                _this.session.setInfor(ok);
                _this.router.navigateByUrl('main');
            }
        });
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_dao_service__WEBPACK_IMPORTED_MODULE_2__["DaoService"], _service_style_class_service__WEBPACK_IMPORTED_MODULE_3__["StyleClassService"], _service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/main/control-user/control-user.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main/control-user/control-user.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udHJvbC11c2VyL2NvbnRyb2wtdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/control-user/control-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/control-user/control-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]='showModal' >\n    <div class='modalBody'>\n        <div class='modalTitle'>Title</div>\n        <form [formGroup]=\"modalData\" (ngSubmit)=\"onSubmit()\" style='padding:2%;'>\n         <input class='form-control' type=\"text\" formControlName=\"id\"  style='margin-bottom:3px;' required placeholder=\"Insert id\"/>\n         <div class='modalWarn' *ngIf='modalData.get(\"id\").invalid' >Require more 4 words</div>\n         <input type=\"text\" class='form-control' formControlName=\"pwd\" style='margin-bottom:3px;' required placeholder=\"Insert pwd\" />\n         <div class='modalWarn' *ngIf='modalData.get(\"pwd\").invalid'>Require moe 4 words</div>\n         <br/>\n         <select formControlName='auth' class='form-control'>\n            <option *ngFor=\"let auth of auth_arr;let i = index\" [value]='auth' [selected] = 'i == 1' >\n              {{auth}}\n            </option>\n          </select>\n         <br/>         \n         <input type=\"submit\" class='btn btn-success' value='Submit'/>\n         <input type='button' class='btn btn-info' (click)='closeModal($event)' style='float:right' value='Close'/>\n      </form>\n    </div>\n  </div>\n  \n\n\n<div class='col-md-12' style='padding-top: 25px;'>\n  \n    <button class='btn btn-primary btn-sm' (click)='insertPage()' style='float: right'>Insert</button>\n    <h4 class='dashboardname'>User controll</h4>\n  \n    <table class='table table-striped testligncenter'>\n      <tr>\n        <th>#</th><th>Id</th><th>Auth</th><th>Alter</th>\n      </tr> \n      <tr *ngFor='let items of list  | async ;let i = index' >\n        <td>{{i+1}}</td>\n        <td>{{items.id}}</td>\n        <td>\n          <select (change)='items.auth = ttt.value' #ttt>\n            <option *ngFor=\"let auth of auth_arr\" [selected] = 'items.auth == auth' [value]='auth' >\n              {{auth}}\n            </option>\n          </select>\n        </td>\n        <td>\n          <input type='button' value='Change' class='btn btn-primary btn-sm' (click)='change(items.idx, items.auth)' />&nbsp;&nbsp;\n          <input type='button' value='Default Password' class='btn btn-success btn-sm' (click)='defaultPwd(items.idx)'/>&nbsp;&nbsp;\n          <input type='button' value='Remove' class='btn btn-danger btn-sm' (click)='delete(items.idx)'/>          \n        </td>\n      </tr>\n    </table>\n  </div>"

/***/ }),

/***/ "./src/app/main/control-user/control-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/control-user/control-user.component.ts ***!
  \*************************************************************/
/*! exports provided: ControlUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlUserComponent", function() { return ControlUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/dao.service */ "./src/app/service/dao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ControlUserComponent = /** @class */ (function () {
    function ControlUserComponent(dao) {
        this.dao = dao;
        this.use = 'Y';
        this.auth_arr = ['SUPER', 'NORMAL'];
        this.size = 5;
        this.showModal = 'hideModal';
        //폼그룹 설정
        this.modalData = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]),
            pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]),
            auth: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    ControlUserComponent.prototype.ngOnInit = function () {
        this.list = this.dao.getItemPaging('items', 'use', this.use, '==', this.size);
    };
    ControlUserComponent.prototype.change = function (idx, authVal) {
        if (!confirm('Do you want to change Data?')) {
            return;
        }
        this.dao.alterItem('items', 'idx', idx, '==', { auth: authVal, idx: idx }, 'update');
    };
    ControlUserComponent.prototype.delete = function (idx) {
        if (!confirm('Do you want to Remove Data?')) {
            return;
        }
        this.dao.alterItem('items', 'idx', idx, '==', { idx: idx }, null);
    };
    ControlUserComponent.prototype.defaultPwd = function (idx) {
        if (!confirm('Do you want to set default value to Password?')) {
            return;
        }
        this.dao.alterItem('items', 'idx', idx, '==', { pwd: '1234', idx: idx }, 'update');
    };
    //저장박스 열기
    ControlUserComponent.prototype.insertPage = function () {
        this.showModal = 'showModal';
    };
    //저장박스 닫기
    ControlUserComponent.prototype.closeModal = function (event) {
        event.stopPropagation();
        this.showModal = 'hideModal';
        this.cleanData();
    };
    //등록 후 폼 영역 초기화
    ControlUserComponent.prototype.cleanData = function () {
        this.modalData.controls.id.reset();
        this.modalData.controls.pwd.reset();
        this.modalData.controls.auth.reset();
    };
    ControlUserComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.modalData.status == 'VALID') {
            var idx = this.dao.getGenerateId();
            this.modalData.value.idx = idx;
            this.modalData.value.use = 'Y';
            this.modalData.value.date = new Date();
            var obj = this.dao.setItem('dash', this.modalData.value);
            this.dao.getItem('items', ['idx'], [idx], ['==']).forEach(function (val) {
                if (val.length > 0) {
                    alert('Complete');
                    _this.showModal = 'hideModal';
                    _this.cleanData();
                }
                else {
                    alert('Fail');
                }
            });
        }
    };
    ControlUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-control-user',
            template: __webpack_require__(/*! ./control-user.component.html */ "./src/app/main/control-user/control-user.component.html"),
            styles: [__webpack_require__(/*! ./control-user.component.css */ "./src/app/main/control-user/control-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_dao_service__WEBPACK_IMPORTED_MODULE_2__["DaoService"]])
    ], ControlUserComponent);
    return ControlUserComponent;
}());



/***/ }),

/***/ "./src/app/main/drw-canvas/drw-canvas.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/drw-canvas/drw-canvas.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".canvas_m{display: inline-block;border:1px solid #cbcbcb;border-radius: 3px}\r\n.cursor_m{width:10px;height:10px;border-radius:50%;display:inline-block;}\r\n.canvasExplain{padding: 5px;color: gray;font-weight: bold;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kcnctY2FudmFzL2Rydy1jYW52YXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDLGtCQUFrQjtBQUMzRSxVQUFVLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUM7QUFDeEUsZUFBZSxZQUFZLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kcnctY2FudmFzL2Rydy1jYW52YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW52YXNfbXtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ym9yZGVyOjFweCBzb2xpZCAjY2JjYmNiO2JvcmRlci1yYWRpdXM6IDNweH1cclxuLmN1cnNvcl9te3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7fVxyXG4uY2FudmFzRXhwbGFpbntwYWRkaW5nOiA1cHg7Y29sb3I6IGdyYXk7Zm9udC13ZWlnaHQ6IGJvbGQ7fSJdfQ== */"

/***/ }),

/***/ "./src/app/main/drw-canvas/drw-canvas.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/drw-canvas/drw-canvas.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cursor\" [ngStyle]=\"pos\"></div>\n<br>\n<input type='button' value='Print Image' class='btn btn-primary btn-sm' style='float: right;margin-right: 15px' (click)='printer()'/>\n<h4 class='dashboardname'>Drawing Canvas</h4>\n\n<div class='canvasExplain'>You can draw line to canvas using mouse down and drag. Try it!</div>\n\n<div class=\"row\" style='padding: 15px;'>\n  <div class='col-md-8'>\n      <canvas #canvas width='600' height='400' class='canvas_m'></canvas>\n  </div>\n  <div class='col-md-4'>\n    <table class='table table-striped'>\n      <tr>\n        <th>#</th><th>Color Type</th>\n      </tr>\n      <tr *ngFor=\"let item of colors\">\n        <td>\n          <input  type='radio' [value]='item[1]' name='cols' [(ngModel)]=\"ckbox\" (change)='onItemChange(item)'/>\n        </td>\n        <td>\n            &nbsp;<span>{{item[0]}}</span> \n            &nbsp;&nbsp;<div [ngStyle] =\"{background:item[1]}\" class=\"cursor_m\"></div>\n        </td>\n      </tr> \n      <tr>\n        <td colspan=\"2\">\n            <select #selectElem class='form-control'  (change)='optionChange(selectElem.value)' >\n                <option *ngFor=\"let item of widthNum\" [value]='item'>Len : {{item}}</option>\n            </select>\n        </td>\n      </tr>     \n    </table>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/drw-canvas/drw-canvas.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/drw-canvas/drw-canvas.component.ts ***!
  \*********************************************************/
/*! exports provided: DrwCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrwCanvasComponent", function() { return DrwCanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DrwCanvasComponent = /** @class */ (function () {
    function DrwCanvasComponent() {
        this.list = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.colors = [
            ['Black', '#515151', true], ['Red', '#ff4848', false], ['Blue', '#4b80ff', false],
            ['Green', '#2fea59', false], ['Yellow', '#a0a400', false], ['Eraser', 'white', false]
        ];
        this.widthNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];
        this.lineWidth = 1;
        this.cursor = false;
        this.pos = { left: '0px', top: '0px', position: 'absolute', background: 'blue', width: '2px', height: '2px', 'border-radius': '50%', border: 'none' };
    }
    DrwCanvasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.element = this.canvas.nativeElement;
        this.ctx = this.element.getContext('2d');
        this.colors.forEach(function (val) {
            if (val[2]) {
                _this.ckbox = val[1];
            }
        });
    };
    //radio box
    DrwCanvasComponent.prototype.onItemChange = function (item) {
        var name = item[0];
        this.colors = this.colors.map(function (res) {
            if (name == res[0]) {
                res[2] = true;
            }
            else {
                res[2] = false;
            }
            return res;
        });
    };
    //select option
    DrwCanvasComponent.prototype.optionChange = function (num) {
        this.lineWidth = num;
    };
    DrwCanvasComponent.prototype.ngAfterViewInit = function () {
        this.worker();
        this.draw();
        this.otherWorker();
    };
    //canvas cursor pointer
    DrwCanvasComponent.prototype.otherWorker = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'mousemove').subscribe(function (evt) {
            if (!_this.cursor) {
                _this.cursor = true;
            }
            var x = evt.clientX;
            var y = evt.clientY;
            if (_this.lineWidth > 4) {
                _this.pos.width = _this.lineWidth + 'px';
                _this.pos.height = _this.lineWidth + 'px';
                x = x - (_this.lineWidth / 2);
                y = y - (_this.lineWidth / 2);
            }
            else {
                _this.pos.width = '2px';
                _this.pos.height = '2px';
            }
            if (_this.ckbox == 'white') {
                _this.pos.border = '3px solid gray';
            }
            else {
                _this.pos.border = 'none';
            }
            _this.pos.background = _this.ckbox;
            _this.pos.left = x + 'px';
            _this.pos.top = y + 'px';
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'mouseleave').subscribe(function (evt) {
            _this.cursor = false;
        });
    };
    //make event listener
    DrwCanvasComponent.prototype.worker = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (e) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.element, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.element, 'mouseup')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.element, 'mouseleave')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])());
        }))
            .subscribe(function (res) {
            var left = _this.element.offsetParent.offsetLeft + _this.element.offsetLeft;
            var top = _this.element.offsetParent.offsetTop + _this.element.offsetTop;
            var prevPos = {
                x: res[0].clientX - left,
                y: res[0].clientY - top
            };
            var currentPos = {
                x: res[1].clientX - left,
                y: res[1].clientY - top
            };
            _this.list.next([prevPos, currentPos]);
        });
    };
    //drawing method
    DrwCanvasComponent.prototype.draw = function () {
        var _this = this;
        this.list.subscribe(function (val) {
            _this.ctx.beginPath();
            _this.ctx.lineWidth = _this.lineWidth;
            _this.ctx.moveTo(val[0].x, val[0].y);
            _this.ctx.strokeStyle = _this.ckbox;
            _this.ctx.lineTo(val[1].x, val[1].y);
            _this.ctx.stroke();
            _this.ctx.closePath();
        });
    };
    //print
    DrwCanvasComponent.prototype.printer = function () {
        var canvasDataUrl = this.canvas.nativeElement.toDataURL().replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
        var link = document.createElement('a');
        link.setAttribute('href', canvasDataUrl);
        link.setAttribute('target', '_blank');
        link.setAttribute('download', 'img.png');
        if (document.createEvent) {
            var evtObj = document.createEvent('MouseEvents');
            evtObj.initEvent('click', true, true);
            link.dispatchEvent(evtObj);
        }
        else if (link.click) {
            link.click();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DrwCanvasComponent.prototype, "canvas", void 0);
    DrwCanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drw-canvas',
            template: __webpack_require__(/*! ./drw-canvas.component.html */ "./src/app/main/drw-canvas/drw-canvas.component.html"),
            styles: [__webpack_require__(/*! ./drw-canvas.component.css */ "./src/app/main/drw-canvas/drw-canvas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DrwCanvasComponent);
    return DrwCanvasComponent;
}());



/***/ }),

/***/ "./src/app/main/file-board/file-board.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/file-board/file-board.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZmlsZS1ib2FyZC9maWxlLWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/file-board/file-board.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/file-board/file-board.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h4 class='dashboardname'>File Board</h4>\r\n\r\n<div class=\"row\" style='padding: 15px;'>\r\n    <div class='col-md-6'>\r\n        <div class=\"center\">\r\n            <file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\" (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\r\n                <span></span>\r\n            </file-drop>\r\n            <div class=\"upload-table\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class=\"upload-name-style\">\r\n                        <tr *ngFor=\"let item of files; let i=index\">\r\n                            <td><strong>{{ item.relativePath }}</strong> <span (click)='delete(item, i)' style='float: right;cursor: pointer'>X</span></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div *ngIf=\"AUTH == 'SUPER'\">\r\n                <input type=\"button\" class='btn btn-primary btn-sm' value='Upload' (click) ='upload()'/>\r\n            </div>\r\n            <div *ngIf=\"AUTH != 'SUPER'\">\r\n                <input type=\"button\" class='btn btn-danger btn-sm' value=\"You can't Upload File\" disabled/>\r\n            </div>            \r\n        </div>\r\n    </div>\r\n    <div class='col-md-6'>\r\n        <table *ngIf=\"list\" class='table table-striped testligncenter'>\r\n            <tr>\r\n                <th>#</th><th>Name <small>(Down)</small></th><th>Day</th><th>Control</th>\r\n              </tr> \r\n            <tr *ngFor='let items of list  | async ;let i = index' >\r\n              <td>{{i+1}}</td>\r\n              <td (click)='download(items.re_name)' style='cursor:pointer'>{{items.origin_name}}</td>\r\n              <td>{{items.reg_date.seconds * 1000 | date:'yyyy-MM-dd HH:mm:ss'}}</td>\r\n              <td>\r\n                <span *ngIf=\"AUTH == 'SUPER'\">\r\n                    <input type='button' value='Remove' class='btn btn-warning btn-sm' (click)='deleteItem($event, items.re_name)'/>\r\n                </span>\r\n                <span *ngIf=\"AUTH != 'SUPER'\">\r\n                    <input type=\"button\" class='btn btn-danger btn-sm' value=\"You can't Remove File\" disabled/>\r\n                </span>    \r\n              </td>\r\n            </tr>\r\n          </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/file-board/file-board.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/file-board/file-board.component.ts ***!
  \*********************************************************/
/*! exports provided: FileBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBoardComponent", function() { return FileBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/dao.service */ "./src/app/service/dao.service.ts");
/* harmony import */ var src_app_service_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/session.service */ "./src/app/service/session.service.ts");




var FileBoardComponent = /** @class */ (function () {
    function FileBoardComponent(dao, session) {
        this.dao = dao;
        this.session = session;
        this.tableName = 'files';
        this.PATH = '/default/';
        this.files = [];
        this.AUTH = session.getInfor().auth;
    }
    FileBoardComponent.prototype.ngOnInit = function () {
        this.list = this.dao.getItemPaging(this.tableName, '', '', '', 10);
    };
    FileBoardComponent.prototype.dropped = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            if (droppedFile.fileEntry.isFile) {
                event.files.forEach(function (fileData) {
                    _this.files.push(fileData);
                });
            }
            else {
                // const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
                // console.log(droppedFile.relativePath, fileEntry);
            }
        }
    };
    FileBoardComponent.prototype.fileOver = function (event) {
        //console.log(event);
    };
    FileBoardComponent.prototype.fileLeave = function (event) {
        //console.log(event);
    };
    FileBoardComponent.prototype.delete = function (item, index) {
        console.log(item);
        this.files = this.files.filter(function (res, idx) {
            if (index == idx) {
                return false;
            }
            else {
                return true;
            }
        });
    };
    FileBoardComponent.prototype.upload = function () {
        var _this = this;
        this.files.forEach(function (file) {
            var rename = _this.dao.getGenerateId();
            var origin_name = file.fileEntry.name;
            var tmpSp = origin_name.split('.');
            var ext = tmpSp[tmpSp.length - 1];
            rename = rename + '.' + ext;
            var data = { idx: rename, origin_name: origin_name, re_name: rename, reg_date: new Date() };
            console.log(rename);
            var fileEntry = file.fileEntry;
            fileEntry.file(function (savedFile) {
                _this.dao.fileUpload(_this.PATH + rename, savedFile);
                _this.dao.setItem(_this.tableName, data);
            });
        });
    };
    FileBoardComponent.prototype.download = function (name) {
        var obj = this.dao.getFileAddress();
        var refer = obj.ref(this.PATH + name);
        refer.getDownloadURL().subscribe(function (url) {
            //console.log('url -> ', url);
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function (event) {
                var blob = xhr.response;
                console.log(blob);
                var a = document.createElement('a');
                a.href = window.URL.createObjectURL(blob);
                a.download = name;
                a.dispatchEvent(new MouseEvent('click'));
            };
            xhr.open('GET', url, true);
            xhr.send();
        });
    };
    FileBoardComponent.prototype.deleteItem = function (event, idx) {
        console.log(idx);
        event.stopPropagation();
        if (!confirm('Do you want Delete the Data? ')) {
            return;
        }
        this.dao.alterItem(this.tableName, 'idx', idx, '==', { idx: idx }, null);
        this.dao.deleteFile(this.PATH + idx);
    };
    FileBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-board',
            template: __webpack_require__(/*! ./file-board.component.html */ "./src/app/main/file-board/file-board.component.html"),
            styles: [__webpack_require__(/*! ./file-board.component.css */ "./src/app/main/file-board/file-board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_dao_service__WEBPACK_IMPORTED_MODULE_2__["DaoService"], src_app_service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], FileBoardComponent);
    return FileBoardComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [activeType]='activeType' (sendToTarget) = 'getTypeForPaging($event)'></app-header>\n<div id='imMainBody'>\n\t<app-simple-board *ngIf=\"activeArray[0][1]\"  [@fadeAnimation]=\"'in'\"></app-simple-board>\n\t<app-file-board *ngIf=\"activeArray[1][1]\"  [@fadeAnimation]=\"'in'\"></app-file-board>\n\t<app-sch-calendar *ngIf=\"activeArray[2][1]\"  [@fadeAnimation]=\"'in'\"></app-sch-calendar>\n\t<app-drw-canvas *ngIf=\"activeArray[3][1]\"  [@fadeAnimation]=\"'in'\"></app-drw-canvas>\n\t<app-play-memory *ngIf=\"activeArray[4][1]\"  [@fadeAnimation]=\"'in'\"></app-play-memory>\n\t<app-control-user *ngIf=\"activeArray[5][1]\"  [@fadeAnimation]=\"'in'\" ></app-control-user>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/session.service */ "./src/app/service/session.service.ts");
/* harmony import */ var _service_myFadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/myFadeIn */ "./src/app/service/myFadeIn.ts");




//fadeAnimation
var MainComponent = /** @class */ (function () {
    function MainComponent(session) {
        this.session = session;
        this.activeType = 'first';
        this.activeArray = [
            [1, true],
            [2, false],
            [3, false],
            [4, false],
            [5, false],
            [6, false],
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.getTypeForPaging = function (event) {
        var AUTH = this.session.getInfor().auth;
        if (AUTH != 'SUPER' && event == 6) {
            alert('Can not access to User Control Page');
            return;
        }
        this.activeArray.map(function (val) {
            if (event == val[0]) {
                val[1] = true;
            }
            else {
                val[1] = false;
            }
            return val;
        });
        if (event == 1 || event == 2) {
            this.activeType = 'first';
        }
        else if (event == 3 || event == 4) {
            this.activeType = 'second';
        }
        else if (event == 5) {
            this.activeType = 'third';
        }
        else {
            this.activeType = 'fourth';
        }
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            animations: [_service_myFadeIn__WEBPACK_IMPORTED_MODULE_3__["fadeAnimation"]],
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/play-memory/play-memory.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/play-memory/play-memory.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slidecontainer {\r\n    width: 100%;\r\n  }\r\n  \r\n  .slider {\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 25px;\r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    transition: opacity .2s;\r\n  }\r\n  \r\n  .slider:hover {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #4CAF50;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .slider::-moz-range-thumb {\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #4CAF50;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .explainGis{\r\n    text-align: center;\r\n    color: #b4b4b4;    \r\n    padding: 5.5px;    \r\n    font-weight: bold;    \r\n    background: #f2fdff;    \r\n    border-radius: 12px;    \r\n    margin-bottom: 8px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wbGF5LW1lbW9yeS9wbGF5LW1lbW9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBRVosdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW4vcGxheS1tZW1vcnkvcGxheS1tZW1vcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlciB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzRDQUY1MDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmV4cGxhaW5HaXN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2I0YjRiNDsgICAgXHJcbiAgICBwYWRkaW5nOiA1LjVweDsgICAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmZGZmOyAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7ICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/main/play-memory/play-memory.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/play-memory/play-memory.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://openlayers.org/en/v4.6.5/css/ol.css\" type=\"text/css\">\n<br>\n<h4 class='dashboardname'>Gis <small>- openLayers</small></h4>\n\n<div class='row'>\n    <div class='col-md-3'>\n        <div class='explainGis'>If you click Map, I will draw</div>\n        <table class='table table-striped testligncenter'>\n            <tr>\n                <th>#</th>\n                <th>Control</th>\n            </tr>\n            <tr>\n                <td>Color</td>\n                <td>\n                    <input class='form-control' [(colorPicker)]=\"color\" [style.background]=\"color\" (colorPickerChange)='chagneColor()' [value]='color' />\n                </td>\n            </tr>\n            <tr>\n                <td>Size</td>\n                <td>\n                    <input #range type=\"range\" min=\"500\" max=\"3000\" [value]='size' class=\"slider\" id=\"myRange\" (change)='ranger(range.value, $event)'>\n                </td>\n            </tr>\n        </table>\n    </div>\n    <div class='col-md-9'>\n        <div id=\"map\" class=\"map\" #map style='min-height: 500px;'></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/play-memory/play-memory.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/play-memory/play-memory.component.ts ***!
  \***********************************************************/
/*! exports provided: PlayMemoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayMemoryComponent", function() { return PlayMemoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source/Vector */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/layer/Vector */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");












var PlayMemoryComponent = /** @class */ (function () {
    function PlayMemoryComponent() {
        this.color = 'rgba(139,91,251,0.61)';
        this.size = 1500;
    }
    PlayMemoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layer = new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_4__["default"]({
            source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_3__["default"]()
        });
        this.view = new ol_View__WEBPACK_IMPORTED_MODULE_5__["default"]({
            center: Object(ol_proj__WEBPACK_IMPORTED_MODULE_6__["fromLonLat"])([126.97796919000007, 37.566535]),
            zoom: 11
        });
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_2__["default"]({
            target: 'map',
            layers: [this.layer],
            view: this.view
        });
        this.map.on('click', function (args) {
            _this.clickEffect(args.coordinate[0], args.coordinate[1]);
        });
    };
    PlayMemoryComponent.prototype.clickEffect = function (arg1, arg2) {
        var vectorSource = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_7__["default"]({ projection: 'EPSG:4326' });
        var circle = new ol_geom__WEBPACK_IMPORTED_MODULE_9__["Circle"]([arg1, arg2], this.size);
        var CircleFeature = new ol_Feature__WEBPACK_IMPORTED_MODULE_10__["default"](circle);
        vectorSource.addFeatures([CircleFeature]);
        var vectorLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_8__["default"]({
            source: vectorSource,
            style: [
                new ol_style__WEBPACK_IMPORTED_MODULE_11__["Style"]({
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_11__["Stroke"]({
                        color: this.color,
                        width: 2
                    }),
                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_11__["Fill"]({
                        color: this.color
                    })
                })
            ]
        });
        this.map.addLayer(vectorLayer);
    };
    PlayMemoryComponent.prototype.chagneColor = function () {
        //console.log(this.color);
    };
    PlayMemoryComponent.prototype.ranger = function (val) {
        this.size = Number(val);
        console.log(this.size, typeof this.size);
    };
    PlayMemoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-play-memory',
            template: __webpack_require__(/*! ./play-memory.component.html */ "./src/app/main/play-memory/play-memory.component.html"),
            styles: [__webpack_require__(/*! ./play-memory.component.css */ "./src/app/main/play-memory/play-memory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayMemoryComponent);
    return PlayMemoryComponent;
}());



/***/ }),

/***/ "./src/app/main/sch-calendar/sch-calendar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main/sch-calendar/sch-calendar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calItem{\r\n    width:13.91%;min-height: 150px;border:1px solid #d4d4d4;\r\n    display: inline-block;vertical-align: middle;\r\n    height: auto;text-align: center;\r\n}\r\n.itemClass{\r\n    min-width: 130px;\r\n    width: auto; height: auto;    \r\n    padding: 3px 6px 3px 6px;    \r\n    background: #daf6ff;    \r\n    display: inline-block;    \r\n    margin: 3px; border-radius: 4px;color: #727272;    \r\n    text-align: center; vertical-align: middle;\r\n    cursor: pointer;\r\n}\r\n.innerSchedule{\r\n    padding: 3px;\r\n    margin: 3px;\r\n    background: #fff0da;\r\n    border-radius: 4px;\r\n}\r\n.displayYear{\r\n    display:inline-block;\r\n    padding: 0% 1% 0% 1%;\r\n    font-weight: bold;\r\n    color: gray;\r\n}\r\n.tinyCursor{display: inline-block;width: 20px;height: 20px;text-align: center;vertical-align: middle;line-height: 13px;;cursor: pointer;font-weight: bold;color: #9494ff;}\r\n.tinyCursor:hover{color: #2a2afb;}\r\n.yearHead{width: 100%;text-align: right;padding-left: 15px; padding-right: 15px;padding-bottom: 10px;}\r\n.listIem_m{text-align: left;width: 100%;height: 100%;}\r\n.item_m_m{border-bottom: 1px solid #bababa;color: #59a1ff;}\r\n.dragExplain{padding: 5px;color: gray;font-weight: bold;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9zY2gtY2FsZW5kYXIvc2NoLWNhbGVuZGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCO0lBQ3ZELHFCQUFxQixDQUFDLHNCQUFzQjtJQUM1QyxZQUFZLENBQUMsa0JBQWtCO0FBQ25DO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVyxFQUFFLFlBQVk7SUFDekIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVyxFQUFFLGtCQUFrQixDQUFDLGNBQWM7SUFDOUMsa0JBQWtCLEVBQUUsc0JBQXNCO0lBQzFDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0EsWUFBWSxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7QUFDekssa0JBQWtCLGNBQWMsQ0FBQztBQUNqQyxVQUFVLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQztBQUNyRyxXQUFXLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7QUFDckQsVUFBVSxnQ0FBZ0MsQ0FBQyxjQUFjLENBQUM7QUFDMUQsYUFBYSxZQUFZLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9zY2gtY2FsZW5kYXIvc2NoLWNhbGVuZGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsSXRlbXtcclxuICAgIHdpZHRoOjEzLjkxJTttaW4taGVpZ2h0OiAxNTBweDtib3JkZXI6MXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGhlaWdodDogYXV0bzt0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLml0ZW1DbGFzc3tcclxuICAgIG1pbi13aWR0aDogMTMwcHg7XHJcbiAgICB3aWR0aDogYXV0bzsgaGVpZ2h0OiBhdXRvOyAgICBcclxuICAgIHBhZGRpbmc6IDNweCA2cHggM3B4IDZweDsgICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZGFmNmZmOyAgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgXHJcbiAgICBtYXJnaW46IDNweDsgYm9yZGVyLXJhZGl1czogNHB4O2NvbG9yOiAjNzI3MjcyOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5uZXJTY2hlZHVsZXtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjBkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uZGlzcGxheVllYXJ7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAlIDElIDAlIDElO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG4udGlueUN1cnNvcntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7d2lkdGg6IDIwcHg7aGVpZ2h0OiAyMHB4O3RleHQtYWxpZ246IGNlbnRlcjt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO2xpbmUtaGVpZ2h0OiAxM3B4OztjdXJzb3I6IHBvaW50ZXI7Zm9udC13ZWlnaHQ6IGJvbGQ7Y29sb3I6ICM5NDk0ZmY7fVxyXG4udGlueUN1cnNvcjpob3Zlcntjb2xvcjogIzJhMmFmYjt9XHJcbi55ZWFySGVhZHt3aWR0aDogMTAwJTt0ZXh0LWFsaWduOiByaWdodDtwYWRkaW5nLWxlZnQ6IDE1cHg7IHBhZGRpbmctcmlnaHQ6IDE1cHg7cGFkZGluZy1ib3R0b206IDEwcHg7fVxyXG4ubGlzdEllbV9te3RleHQtYWxpZ246IGxlZnQ7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO31cclxuLml0ZW1fbV9te2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmFiYWJhO2NvbG9yOiAjNTlhMWZmO31cclxuLmRyYWdFeHBsYWlue3BhZGRpbmc6IDVweDtjb2xvcjogZ3JheTtmb250LXdlaWdodDogYm9sZDt9Il19 */"

/***/ }),

/***/ "./src/app/main/sch-calendar/sch-calendar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/sch-calendar/sch-calendar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h4 class='dashboardname'>Simple Calendar</h4>\n<br>\n<div>\n    <div class='dragExplain'>You can drag this items to calendar. Try it!</div>\n    <div mwlDraggable (dragEnd)=\"dragEnd($event)\" [dropData]='temp' class='itemClass'>{{temp.title}}</div>\n    <div mwlDraggable (dragEnd)=\"dragEnd($event)\" [dropData]='temp2' class='itemClass'>{{temp2.title}}</div>\n    <div mwlDraggable (dragEnd)=\"dragEnd($event)\" [dropData]='temp3' class='itemClass'>{{temp3.title}}</div>\n    <div mwlDraggable (dragEnd)=\"dragEnd($event)\" [dropData]='temp4' class='itemClass'>{{temp4.title}}</div>\n</div>\n\n<div class='yearHead'>\n  <div class='tinyCursor' (click)='moveNext(\"left\")'> ◁ </div>\n  <h3 class='displayYear'>{{displayYear}}</h3>\n  <div class='tinyCursor' (click)='moveNext(\"right\")'> ▷ </div>\n</div>\n\n<div *ngIf=\"list\" class='listIem_m'>\n  <div *ngFor=\"let item of list;let idx = index;\" mwlDroppable (drop)=\"dropEnd($event,idx)\" class='calItem'>\n    <div class='item_m_m'>\n      <span>{{item[0]}}</span> <small>({{item[1]}})</small>\n    </div>\n    <div *ngIf=\"listItem[idx]\">\n      <div class='innerSchedule' *ngFor=\"let smitem of listItem[idx];let ii = index;\" mwlDraggable [dropData]='smitem'>{{smitem.title}}</div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/sch-calendar/sch-calendar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/sch-calendar/sch-calendar.component.ts ***!
  \*************************************************************/
/*! exports provided: SchCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchCalendarComponent", function() { return SchCalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/dao.service */ "./src/app/service/dao.service.ts");



var SchCalendarComponent = /** @class */ (function () {
    function SchCalendarComponent(dao) {
        this.dao = dao;
        this.paging_year = 0;
        this.paging_month = 0;
        this.temp = { title: 'Title1', index: 123, inner: -1, identity: -1 };
        this.temp2 = { title: 'Title2', index: 133, inner: -1, identity: -1 };
        this.temp3 = { title: 'Title3', index: 143, inner: -1, identity: -1 };
        this.temp4 = { title: 'Title4', index: 153, inner: -1, identity: -1 };
    }
    //make Calendar array
    SchCalendarComponent.prototype.dateArray = function (year, month) {
        var week = ['일', '월', '화', '수', '목', '금', '토'];
        var array = new Array();
        var DAY = new Date();
        if (year != undefined && year != null && year != '') {
            DAY.setFullYear(year);
        }
        if (month != undefined && month != null && month != '' && (month - 1) > -1) {
            DAY.setMonth(month - 1);
        }
        var mm = (DAY.getMonth() + 1) < 10 ? '0' + (DAY.getMonth() + 1) : (DAY.getMonth() + 1);
        this.displayYear = DAY.getFullYear() + '. ' + mm; //표현
        var static_month = DAY.getMonth(); //기준달
        DAY.setDate(1);
        while (static_month == DAY.getMonth()) {
            mm = (DAY.getMonth() + 1) < 10 ? '0' + (DAY.getMonth() + 1) : (DAY.getMonth() + 1);
            var dd = (DAY.getDate()) < 10 ? '0' + (DAY.getDate()) : (DAY.getDate());
            array.push([mm + '.' + dd, week[DAY.getDay()]]);
            DAY.setDate(DAY.getDate() + 1);
        }
        if (this.paging_year == 0) {
            this.paging_year = DAY.getFullYear();
        }
        if (this.paging_month == 0) {
            this.paging_month = DAY.getMonth();
        }
        return array;
    };
    SchCalendarComponent.prototype.ngOnInit = function () {
        this.list = this.dateArray('', 1);
        this.listItem = new Array(this.list.length);
    };
    SchCalendarComponent.prototype.dragEnd = function (event) {
        //console.log('Element was dragged', event);
    };
    SchCalendarComponent.prototype.dropEnd = function (event, idx) {
        if (event.dropData.inner == idx) {
            console.log('this is self');
            return;
        }
        if (this.listItem[idx] == undefined || this.listItem[idx] == null || this.listItem[idx].length == 0) {
            this.listItem[idx] = new Array();
        }
        if (event.dropData.inner != -1) {
            this.listItem[event.dropData.inner] = this.listItem[event.dropData.inner].filter(function (itm) {
                if (itm.identity == event.dropData.identity) {
                    return false;
                }
                return true;
            });
        }
        var item = {
            'title': event.dropData.title,
            'index': event.dropData.index,
            'inner': idx,
            'identity': this.dao.getGenerateId()
        };
        this.listItem[idx].push(item);
    };
    //change month and year
    SchCalendarComponent.prototype.moveNext = function (order) {
        if (order == 'left') {
            if (this.paging_month == 1) {
                this.paging_month = 12;
                this.paging_year = this.paging_year - 1;
            }
            else {
                this.paging_month = this.paging_month - 1;
            }
        }
        else {
            if (this.paging_month == 12) {
                this.paging_month = 1;
                this.paging_year = this.paging_year + 1;
            }
            else {
                this.paging_month = this.paging_month + 1;
            }
        }
        this.list = this.dateArray(this.paging_year, this.paging_month);
        this.listItem = new Array(this.list.length);
    };
    SchCalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sch-calendar',
            template: __webpack_require__(/*! ./sch-calendar.component.html */ "./src/app/main/sch-calendar/sch-calendar.component.html"),
            styles: [__webpack_require__(/*! ./sch-calendar.component.css */ "./src/app/main/sch-calendar/sch-calendar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_dao_service__WEBPACK_IMPORTED_MODULE_2__["DaoService"]])
    ], SchCalendarComponent);
    return SchCalendarComponent;
}());



/***/ }),

/***/ "./src/app/main/simple-board/simple-board.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main/simple-board/simple-board.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".readmore{\r\n    text-align: center;color: #a8a8a8;font-size: 17px;font-weight: bold;cursor: pointer;\r\n}\r\n.testligncenter tr td, th{\r\n text-align: center;\r\n}\r\n.testligncenter tr th{\r\n font-size: 17px;    \r\n}\r\n.titleboxx{\r\n    margin-bottom:5px;width: 70%;float: left;\r\n}\r\n.seedetail{\r\n    width: 10%;float: left;margin-left: 5px;\r\n}\r\n.dashboardname{\r\n    color: #b4b4b4;font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9zaW1wbGUtYm9hcmQvc2ltcGxlLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGVBQWU7QUFDdkY7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVc7QUFDNUM7QUFDQTtJQUNJLFVBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCO0FBQzNDO0FBQ0E7SUFDSSxjQUFjLENBQUMsaUJBQWlCO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9zaW1wbGUtYm9hcmQvc2ltcGxlLWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVhZG1vcmV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6ICNhOGE4YTg7Zm9udC1zaXplOiAxN3B4O2ZvbnQtd2VpZ2h0OiBib2xkO2N1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGVzdGxpZ25jZW50ZXIgdHIgdGQsIHRoe1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXN0bGlnbmNlbnRlciB0ciB0aHtcclxuIGZvbnQtc2l6ZTogMTdweDsgICAgXHJcbn1cclxuLnRpdGxlYm94eHtcclxuICAgIG1hcmdpbi1ib3R0b206NXB4O3dpZHRoOiA3MCU7ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnNlZWRldGFpbHtcclxuICAgIHdpZHRoOiAxMCU7ZmxvYXQ6IGxlZnQ7bWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uZGFzaGJvYXJkbmFtZXtcclxuICAgIGNvbG9yOiAjYjRiNGI0O2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/main/simple-board/simple-board.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/simple-board/simple-board.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]='showModal' >\n\t<div class='modalBody'>\n\t    <div class='modalTitle'>Title</div>\n\t    <form [formGroup]=\"modalData\" (ngSubmit)=\"onSubmit()\" style='padding:2%;'>\n\t\t   <input class='form-control' type=\"text\" formControlName=\"title\"  style='margin-bottom:3px;' required />\n\t\t   <div class='modalWarn' *ngIf='modalData.get(\"title\").invalid' >Require more 1 word</div>\n\t\t   <textarea class='form-control' formControlName=\"contents\" style='margin-bottom:3px;resize:none' required></textarea>\n\t\t   <div class='modalWarn' *ngIf='modalData.get(\"contents\").invalid'>Require moe 4 words</div>\n\t\t   <br/>\n\t\t   <input type=\"submit\" class='btn btn-success' value='Submit'/>\n\t\t   <input type='button' class='btn btn-info' (click)='closeModal($event)' style='float:right' value='Close'/>\n\t\t</form>\n\t</div>\n</div>\n\n\n<div class='col-md-12' style='padding-top: 25px;'>\n\t\n\t<span *ngIf=\"AUTH == 'SUPER'\">\n\t\t\t<button class='btn btn-primary btn-sm' (click)='insertPage()' style='float: right'>Insert</button>\n\t</span>\n\t<span *ngIf=\"AUTH != 'SUPER'\">\n\t\t\t<input type=\"button\" class='btn btn-danger btn-sm' value=\"You can't Insert Data\" style='float: right' disabled/>\n\t</span> \t\n\n\t\n  <h4 class='dashboardname'>DashBoard</h4>\n\n  <table class='table table-striped testligncenter'>\n    <tr>\n\t    <th>Contents</th><th>Day</th><th>Alter</th>\n\t  </tr> \n    <tr *ngFor='let items of list  | async ;let i = index' >\n      <td>\n\t\t\t\t<input #title_id class='form-control titleboxx' type=\"text\" value='{{items.title}}' (change) = 'items.title = title_id.value' required/>\n        <input type=\"button\" class='btn btn-info seedetail' value='-' (click)='showTextArea($event,items.idx)'/>\n\t    \t<textarea #contents_id *ngIf='visibleList[items.idx]' class='form-control' style='resize:none;' (change)='items.contents = contents_id.value' required>{{items.contents}}</textarea>\n\t\t\t</td>\n\t\t\t<td>{{items.date.seconds * 1000 | date:'yyyy-MM-dd HH:mm:ss'}}</td>\n\t\t\t<td style='text-align: center;'>\n\t\t\t\t\t<span *ngIf=\"AUTH == 'SUPER'\">\n\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t<div class='btn btn-success'  (click)='alterData($event,items.idx,items)'>Change</div>\n\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t<input type=\"button\" class='btn btn-warning' value='Remove' (click)='removeData($event,items.idx)'/>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span *ngIf=\"AUTH != 'SUPER'\">\n\t\t\t\t\t\t\t<input type=\"button\" class='btn btn-danger btn-sm' value=\"You can't Alter Data\" disabled/>\n\t\t\t\t\t</span> \t\t\t\t\t\n\t  \t</td>\n    </tr>\n  </table>\n</div>\n<div class='col-md-12 readmore'>\n\t<span (click)='paging($event)'> Read more contents..</span>\n</div>"

/***/ }),

/***/ "./src/app/main/simple-board/simple-board.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/simple-board/simple-board.component.ts ***!
  \*************************************************************/
/*! exports provided: SimpleBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleBoardComponent", function() { return SimpleBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/dao.service */ "./src/app/service/dao.service.ts");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/session.service */ "./src/app/service/session.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var SimpleBoardComponent = /** @class */ (function () {
    function SimpleBoardComponent(dao, serv, session) {
        this.session = session;
        this.showModal = 'hideModal';
        this.visibleList = new Array();
        this.savedList = new Array();
        //폼그룹 설정
        this.modalData = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]),
            contents: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)])
        });
        this.lastSize = 5;
        this.database = dao;
        this.service = serv;
        console.log(session.getInfor());
        this.AUTH = session.getInfor().auth;
    }
    //초기화 이후 데이터리스트 가져오기
    SimpleBoardComponent.prototype.ngOnInit = function () {
        this.getDataFromFireBase();
    };
    SimpleBoardComponent.prototype.getDataFromFireBase = function () {
        var _this = this;
        if (this.list != undefined && this.list != null) {
            this.list.subscribe().closed;
        }
        this.list = this.database.getItemPaging('dash', 'zeroNum', 0, '==', this.lastSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (val) {
            val.forEach(function (res) {
                _this.visibleList[res.idx] = false;
                _this.savedList.push(res);
            });
            return true;
        }));
    };
    SimpleBoardComponent.prototype.paging = function (event) {
        this.lastSize = this.lastSize + 5;
        this.getDataFromFireBase();
    };
    //저장박스 열기
    SimpleBoardComponent.prototype.insertPage = function () {
        this.showModal = 'showModal';
    };
    //onSumbit 형식으로 저장해보기
    SimpleBoardComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.modalData.status == 'VALID') {
            var idx = this.database.getGenerateId();
            this.modalData.value.idx = idx;
            this.modalData.value.zeroNum = 0;
            this.modalData.value.date = new Date();
            var obj = this.database.setItem('dash', this.modalData.value);
            this.database.getItem('dash', ['idx'], [idx], ['==']).forEach(function (val) {
                if (val.length > 0) {
                    alert('Complete');
                    _this.showModal = 'hideModal';
                    _this.cleanData();
                }
                else {
                    alert('Fail');
                }
            });
        }
    };
    //저장박스 닫기
    SimpleBoardComponent.prototype.closeModal = function (event) {
        event.stopPropagation();
        this.showModal = 'hideModal';
        this.cleanData();
    };
    //등록 후 폼 영역 초기화
    SimpleBoardComponent.prototype.cleanData = function () {
        this.modalData.controls.title.reset();
        this.modalData.controls.contents.reset();
    };
    //변경하기
    SimpleBoardComponent.prototype.alterData = function (event, idx, items) {
        var _this = this;
        event.stopPropagation();
        if (!confirm('Do you want change the Data? ')) {
            return;
        }
        this.savedList.forEach(function (val) {
            if (val.idx == idx) {
                var data = { idx: idx, title: items.title, contents: items.contents, date: new Date() };
                if (items.contents == null)
                    delete data['contents'];
                _this.database.alterItem('dash', 'idx', idx, '==', data, 'update');
                return;
            }
        });
    };
    //제거하기
    SimpleBoardComponent.prototype.removeData = function (event, idx) {
        console.log(idx);
        event.stopPropagation();
        if (!confirm('Do you want Delete the Data? ')) {
            return;
        }
        this.database.alterItem('dash', 'idx', idx, '==', { idx: idx }, null);
    };
    //리스트에서 세부보기
    SimpleBoardComponent.prototype.showTextArea = function (obj, idx) {
        obj.stopPropagation();
        if (this.visibleList[idx]) {
            this.visibleList[idx] = false;
            obj.srcElement.defaultValue = '-';
        }
        else {
            this.visibleList[idx] = true;
            obj.srcElement.defaultValue = 'O';
        }
    };
    SimpleBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simple-board',
            template: __webpack_require__(/*! ./simple-board.component.html */ "./src/app/main/simple-board/simple-board.component.html"),
            styles: [__webpack_require__(/*! ./simple-board.component.css */ "./src/app/main/simple-board/simple-board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_dao_service__WEBPACK_IMPORTED_MODULE_2__["DaoService"], _service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], _service_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], SimpleBoardComponent);
    return SimpleBoardComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/service/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.service */ "./src/app/service/session.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, session, route) {
        this.router = router;
        this.session = session;
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.session.getInfor() == null) {
            alert("Please login first");
            this.router.navigate(['welcome'], { queryParams: { redirectTo: state.url } });
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/service/dao.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/dao.service.ts ***!
  \****************************************/
/*! exports provided: DaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaoService", function() { return DaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");






var DaoService = /** @class */ (function () {
    //의존성 주입
    function DaoService(db, strg) {
        //데이터 베이스 관련 객체
        this.DB_NAME = 'items';
        this.items2 = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.DataBase = db;
        if (this.DataBase != null && this.DataBase != undefined) {
            this.status = 'OK';
        }
        else {
            this.status = 'NO';
        }
        this.storage = strg;
    }
    DaoService.prototype.getGenerateId = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345_6789";
        for (var i = 0; i < 22; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    //데이터 가져오기, 단일조건
    DaoService.prototype.getItem = function (db_name, param, value, operator) {
        var itemCollec = this.DataBase.collection(db_name, function (ref) {
            var query = ref;
            if (param != null) {
                for (var p = 0; p < param.length; p++) {
                    query = query.where(param[p], operator[p], value[p]);
                }
            }
            return query;
        });
        var itm = itemCollec.valueChanges();
        return itm;
    };
    //Paging
    DaoService.prototype.getItemPaging = function (db_name, param, value, operator, afterNum) {
        var _this = this;
        if (param == null || param == '') {
            this.itemsCollection = this.DataBase.collection(db_name, function (ref) { return ref; });
        }
        else {
            this.itemsCollection = this.DataBase.collection(db_name, function (ref) {
                return ref.orderBy('date', 'desc').where(param, operator, value).limit(afterNum);
            });
        }
        this.itemsCollection.valueChanges().forEach(function (val) {
            _this.items2.next(val);
        });
        this.items = this.items2.asObservable();
        return this.items;
    };
    //데이터 넣기
    DaoService.prototype.setItem = function (db_name, item) {
        this.DataBase.collection(db_name).valueChanges();
        if (this.itemsCollection == undefined || this.itemsCollection == null) {
            this.itemsCollection = this.DataBase.collection(db_name);
            this.items = this.itemsCollection.valueChanges();
        }
        this.itemsCollection.add(item);
        this.items = this.itemsCollection.valueChanges();
    };
    //데이터 수정/삭제
    DaoService.prototype.alterItem = function (db_name, param, value, operator, changeItem, type) {
        var _this = this;
        if (this.subscription != undefined && this.subscription != null) {
            if (!this.subscription.closed) {
                this.subscription.unsubscribe(); //무한 구독 방지
            }
        }
        var num = 0;
        this.subscription = this.itemsCollection.stateChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var ID = a.payload.doc.id;
                var datas = changeItem;
                if (data.idx == changeItem.idx) {
                    if (type == null) {
                        _this.itemsCollection.doc(ID).delete();
                    }
                    else if (type == 'set') {
                        _this.itemsCollection.doc(ID).set(datas);
                    }
                    else {
                        _this.itemsCollection.doc(ID).update(datas);
                    }
                    num++;
                }
                return data;
            });
        })).subscribe();
    };
    //파일 업로드
    DaoService.prototype.fileUpload = function (filePath, file) {
        this.task = this.storage.upload(filePath, file);
        console.log(this.task);
    };
    //파일 주소 가져오기
    DaoService.prototype.getFileAddress = function () {
        return this.storage;
    };
    //파일 삭제
    DaoService.prototype.deleteFile = function (path) {
        var refer = this.storage.ref(path);
        refer.delete();
    };
    DaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
    ], DaoService);
    return DaoService;
}());



/***/ }),

/***/ "./src/app/service/len-check.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/service/len-check.pipe.ts ***!
  \*******************************************/
/*! exports provided: LenCheckPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LenCheckPipe", function() { return LenCheckPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LenCheckPipe = /** @class */ (function () {
    function LenCheckPipe() {
    }
    LenCheckPipe.prototype.transform = function (value, args) {
        console.log(value);
        var len = value.toString().length;
        if (len > 0 && len < 4) {
            return '아이디는 4자리이상 입력하여야 합니다.';
        }
        else if (len == 0) {
            return '아이디를 입력하여 주세요.';
        }
        return '';
    };
    LenCheckPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'lenCheck'
        })
    ], LenCheckPipe);
    return LenCheckPipe;
}());



/***/ }),

/***/ "./src/app/service/myFadeIn.ts":
/*!*************************************!*\
  !*** ./src/app/service/myFadeIn.ts ***!
  \*************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(600)]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(0, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })))
]);


/***/ }),

/***/ "./src/app/service/session.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/session.service.ts ***!
  \********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService.prototype.getInfor = function () {
        var locTime = localStorage.getItem('time');
        if (locTime == undefined || locTime == null || locTime.length == 0) {
            return null;
        }
        var time1 = new Date(locTime);
        var time2 = new Date();
        var gap = Math.abs((time2.getTime() - time1.getTime()) / (60 * 1000)); //분
        if (gap >= 120) { //세션 만료
            localStorage.setItem('id', null);
            localStorage.setItem('time', null);
            localStorage.setItem('auth', null);
            return null;
        }
        var res = {
            id: localStorage.getItem('id'),
            time: localStorage.getItem('time'),
            auth: localStorage.getItem('auth')
        };
        return res;
    };
    SessionService.prototype.setInfor = function (inf) {
        localStorage.setItem('id', inf.id);
        localStorage.setItem('time', inf.time);
        localStorage.setItem('auth', inf.auth);
    };
    SessionService.prototype.remove = function () {
        localStorage.setItem('id', null);
        localStorage.setItem('time', null);
        localStorage.setItem('auth', null);
        return true;
    };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/service/style-class.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/style-class.service.ts ***!
  \************************************************/
/*! exports provided: StyleClassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleClassService", function() { return StyleClassService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StyleClassService = /** @class */ (function () {
    function StyleClassService() {
        this.index_id_class = { 'form-control id-class': true };
        this.index_id_style = { 'width': '100%', 'display': 'inline-block', 'margin-top': '8px' };
        this.index_bd_style = { 'text-align': 'center', 'width': '40%', 'height': 'auto', 'display': 'inline-block', 'min-width': '300px', 'margin': '15px', 'border': '1px solid rgba(201, 199, 255,0.8)', 'border-radius': '5px', 'margin-top': '5%', 'background': 'rgba(255, 255, 255, 0.7)' };
        this.index_pp_stype = { 'font-size': '13px', 'color': '#ff6b6b', 'font-weight': 'bold' };
        this.header_style_active = { 'width': '19.9%', 'text-align': 'center', 'font-weight': 'bold' };
        this.header_style_sleep = { 'width': '19.9%', 'text-align': 'center' };
        this.log_in_head = { 'width': '100%', 'height': '50px', 'background': 'rgba(201, 199, 255,0.4)', 'border-radius': '3px 3px 0px 0px', 'font-size': '24px', 'color': 'gray', 'text-align': 'center', 'line-height': ' 45px', 'border-bottom': '1px solid rgba(201, 199, 255, 0.9)' };
    }
    StyleClassService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //스타일 관련 서비스 클래스
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StyleClassService);
    return StyleClassService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\04_NODE\RealWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map