(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <button [routerLink]=\"['/']\">Load Home</button>\n<button [routerLink]=\"['/pets/new']\">Load New</button>\n<button [routerLink]=\"['/pets/edit']\">Load Edit</button>\n<button [routerLink]=\"['/pets/show']\">Load Show</button> -->\n\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"col-4 mx-auto\">\n    <h3>Pet Shlter</h3>\n    <h5>\n      Edit this pet\n    </h5>\n    <a [routerLink]=\"['/']\" class=\"btn btn-primary\">Home</a>\n\n    <div *ngIf=\"showCreate == true\">\n      <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our\n        database? Use the Add Author link below to add the new author.</p>\n      <a [routerLink]=\"['/new']\">Add Author</a>\n    </div>\n\n    <form (submit)=\"onEdit(updatePet._id)\">\n      <!-- use the json pipe to see how newTask changes in real time -->\n      <p>{{ newTask | json }} </p>\n      <div class=\"form-group\">\n\n\n        <div *ngFor=\"let error of errors\">\n          <p class=\"text-danger\">{{error}}</p>\n        </div>\n\n        <label>Pet name:</label>\n        <input type=\"text\" class=\"form-control\" name=\"updatePet.name\" [(ngModel)]=\"updatePet.name\">\n\n      </div>\n      <div class=\"form-group\">\n        <label>Pet Type:</label>\n        <input type=\"text\" class=\"form-control\" name=\"updatePet.kind\" [(ngModel)]=\"updatePet.kind\">\n        <!-- <input type=\"text\" required minlength=\"4\" class=\"form-control\" name=\"newTask.title\"\n                    [(ngModel)]=\"newTask.title\" #title=\"ngModel\"> -->\n\n      </div>\n\n      <div class=\"form-group\">\n        <label>Description:</label>\n        <input type=\"text\" class=\"form-control\" name=\"updatePet.description\" [(ngModel)]=\"updatePet.description\">\n        <!-- <input type=\"text\" required minlength=\"4\" class=\"form-control\" name=\"newTask.title\"\n            [(ngModel)]=\"newTask.title\" #title=\"ngModel\"> -->\n\n      </div>\n\n      <p>Skills:</p>\n      <div class=\"ml-3\">\n        <div class=\"form-group\">\n          <label>Skill 1:</label>\n          <input type=\"text\" class=\"form-control\" name=\"updatePet.skill1\" [(ngModel)]=\"updatePet.skill1\">\n          <!-- <input type=\"text\" required minlength=\"4\" class=\"form-control\" name=\"newTask.title\"\n            [(ngModel)]=\"newTask.title\" #title=\"ngModel\"> -->\n        </div>\n        <div class=\"form-group\">\n          <label>Skill 2:</label>\n          <input type=\"text\" class=\"form-control\" name=\"updatePet.skill2\" [(ngModel)]=\"updatePet.skill2\">\n          <!-- <input type=\"text\" required minlength=\"4\" class=\"form-control\" name=\"newTask.title\"\n            [(ngModel)]=\"newTask.title\" #title=\"ngModel\"> -->\n        </div>\n        <div class=\"form-group\">\n          <label>Skill 3:</label>\n          <input type=\"text\" class=\"form-control\" name=\"updatePet.skill3\" [(ngModel)]=\"updatePet.skill3\">\n          <!-- <input type=\"text\" required minlength=\"4\" class=\"form-control\" name=\"newTask.title\"\n            [(ngModel)]=\"newTask.title\" #title=\"ngModel\"> -->\n        </div>\n        <a [routerLink]=\"['/pets/', updatePet._id]\" class=\"btn btn-primary\">Cancel</a>\n        <!-- <a [routerLink]=\"['/']\" class=\"btn btn-secondary\" role=\"button\">Cancel</a> -->\n        <input class=\"btn btn-primary btn ml-4\" type=\"submit\" value=\"Edit\" />\n      </div>\n\n    </form>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h3>Favorite Authors</h3>\n\n  <a [routerLink]=\"['/new']\">Add an author</a>\n\n  <div class=\"col-6 mx:auto\">\n    <table class=\"table\">\n      <thead class=\"bg-primary\">\n        <tr class=\"text-light\">\n\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Action</th>\n\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let author of authors\">\n\n          <td>\n            <a [routerLink]=\"['/show/', author._id]\">{{author.name}}</a>\n          </td>\n          <td>\n            <a [routerLink]=\"['/edit/', author._id]\" class=\"btn btn-success b\" role=\"button\">Edit</a>\n            <!-- <a href=\"/edit/{{author._id}}\" class=\"btn btn-success b\" role=\"button\">Edit</a> -->\n            <button type=\"button\" class=\"btn btn-danger ml-3\" (click)=\"onButtonDelete(author._id)\">Delete</button>\n          </td>\n\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"col-4 mx-auto\">\n    <h3>Pet Shelter</h3>\n    <h5>Know of a pet needing a home</h5>\n    <a [routerLink]=\"['/']\" class=\"btn btn-primary\">Home</a>\n\n    <form (submit)=\"onSubmit()\">\n      <!-- use the json pipe to see how newTask changes in real time -->\n      <p>{{ newTask | json }} </p>\n      <div class=\"form-group\">\n        <!-- <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger\">\n        \n                    <div *ngIf=\"title.errors.required\">\n                      Title is required.\n                    </div>\n                    <div *ngIf=\"title.errors.minlength\">\n                      Title must be at least 4 characters long.\n                    </div>\n        \n        \n                  </div> -->\n\n        <div *ngFor=\"let error of errors\">\n          <p class=\"text-danger\">{{error}}</p>\n        </div>\n\n        <label>Pet name:</label>\n        <input type=\"text\" class=\"form-control\" name=\"newPet.name\" [(ngModel)]=\"newPet.name\">\n        <!-- <input type=\"text\" required minlength=\"4\" class=\"form-control\" name=\"newTask.title\"\n                    [(ngModel)]=\"newTask.title\" #title=\"ngModel\"> -->\n\n      </div>\n      <div class=\"form-group\">\n        <label>Pet Type:</label>\n        <input type=\"text\" class=\"form-control\" name=\"newPet.kind\" [(ngModel)]=\"newPet.kind\">\n        <!-- <input type=\"text\" required minlength=\"4\" class=\"form-control\" name=\"newTask.title\"\n                    [(ngModel)]=\"newTask.title\" #title=\"ngModel\"> -->\n\n      </div>\n\n      <div class=\"form-group\">\n        <label>Description:</label>\n        <input type=\"text\" class=\"form-control\" name=\"newPet.description\" [(ngModel)]=\"newPet.description\">\n        <!-- <input type=\"text\" required minlength=\"4\" class=\"form-control\" name=\"newTask.title\"\n            [(ngModel)]=\"newTask.title\" #title=\"ngModel\"> -->\n\n      </div>\n\n      <p>Skills:</p>\n      <div class=\"ml-3\">\n        <div class=\"form-group\">\n          <label>Skill 1:</label>\n          <input type=\"text\" class=\"form-control\" name=\"newPet.skill1\" [(ngModel)]=\"newPet.skill1\">\n          <!-- <input type=\"text\" required minlength=\"4\" class=\"form-control\" name=\"newTask.title\"\n            [(ngModel)]=\"newTask.title\" #title=\"ngModel\"> -->\n        </div>\n        <div class=\"form-group\">\n          <label>Skill 2:</label>\n          <input type=\"text\" class=\"form-control\" name=\"newPet.skill2\" [(ngModel)]=\"newPet.skill2\">\n          <!-- <input type=\"text\" required minlength=\"4\" class=\"form-control\" name=\"newTask.title\"\n            [(ngModel)]=\"newTask.title\" #title=\"ngModel\"> -->\n        </div>\n        <div class=\"form-group\">\n          <label>Skill 3:</label>\n          <input type=\"text\" class=\"form-control\" name=\"newPet.skill3\" [(ngModel)]=\"newPet.skill3\">\n          <!-- <input type=\"text\" required minlength=\"4\" class=\"form-control\" name=\"newTask.title\"\n            [(ngModel)]=\"newTask.title\" #title=\"ngModel\"> -->\n        </div>\n      </div>\n\n      <a [routerLink]=\"['/']\" class=\"btn btn-secondary\" role=\"button\">Cancel</a>\n      <input class=\"btn btn-primary btn ml-4\" type=\"submit\" value=\"Add Pet\" />\n\n    </form>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>not-found works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pets.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pets.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h3>Pet Shelter</h3>\n  <h5>the pets are looking for a home!</h5>\n\n  <a [routerLink]=\"['/pets/new']\">Add a pet to the shelter</a>\n\n  <div class=\"col-6 mx:auto\">\n    <table class=\"table\">\n      <thead class=\"bg-primary\">\n        <tr class=\"text-light\">\n\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Type</th>\n          <th scope=\"col\">Action</th>\n\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let pet of pets\">\n\n          <td>\n            {{pet.name}}\n          </td>\n          <td>{{pet.kind}}</td>\n          <td>\n            <!-- <a [routerLink]=\"['/edit/', author._id]\" class=\"btn btn-success b\" role=\"button\">Edit</a> -->\n            <!-- <a href=\"/edit/{{author._id}}\" class=\"btn btn-success b\" role=\"button\">Edit</a> -->\n            <!-- <a [routerLink]=\"['/show/', pet._id]\" class=\"btn btn-primary\">Details</a> -->\n            <a [routerLink]=\"['/pets/', pet._id]\" class=\"btn btn-primary\">Details</a>\n            <a [routerLink]=\"['/pets', pet._id,'edit']\" class=\"btn btn-success ml-2\" role=\"button\">Edit</a>\n            <!-- <a [routerLink]=\"['/edit/', pet._id,]\" class=\"btn btn-success ml-2\" role=\"button\">Edit</a> -->\n            <!-- <button type=\"button\" class=\"btn btn-danger ml-3\" (click)=\"onButtonDelete(pet._id)\">Delete</button> -->\n          </td>\n\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show/show.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show/show.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <a [routerLink]=\"['/']\" class=\"btn btn-primary\" role=\"button\">Home</a>\n  <h3>Pet Shelter</h3>\n  <h5>Details about {{petInfo.name}}</h5>\n  <p><span class=\"font-weight-bolder\">Pet Type: </span>{{petInfo.kind}}</p>\n  <p><span class=\"font-weight-bolder\">Description: </span>{{petInfo.description}}</p>\n  <p class=\"font-weight-bolder\">Skills: </p>\n  <div class=\"ml-4\">\n    <p>{{petInfo.skill1}}</p>\n    <p>{{petInfo.skill2}}</p>\n    <p>{{petInfo.skill3}}</p>\n  </div>\n  <p><span class=\"font-weight-bolder\">Likes: </span>{{petInfo.like}}</p>\n\n\n  <!-- <p>Created on: {{authorInfo.createdAt | date}}</p> -->\n  <button *ngIf=\"showLike == true\" type=\"button\" class=\"btn btn-success ml-3\"\n    (click)=\"onButtonLike(petInfo._id)\">Like!</button>\n  <button type=\"button\" class=\"btn btn-primary ml-3\" (click)=\"onButtonDelete(petInfo._id)\">Adopt this pet!</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");









const routes = [
    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'pets', component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_4__["PetsComponent"] },
    { path: 'pets/new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"] },
    // use a colon and parameter name to include a parameter in the url
    { path: 'pets/:id/edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"] },
    { path: 'pets/:id', component: _show_show_component__WEBPACK_IMPORTED_MODULE_7__["ShowComponent"] },
    // redirect to /pets if there is nothing in the url
    { path: '', pathMatch: 'full', redirectTo: '/pets' },
    // the ** will catch anything that did not match any of the above routes
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

// old routes
// { path: 'index', component: IndexComponent },
// { path: 'pets', component: PetsComponent },
// { path: 'pets/new', component: NewComponent },
// // use a colon and parameter name to include a parameter in the url
// { path: 'pets/:id/edit', component: EditComponent },
// { path: 'pets/:id', component: ShowComponent },
// // redirect to /pets if there is nothing in the url
// { path: '', pathMatch: 'full', redirectTo: '/pets' },
// // the ** will catch anything that did not match any of the above routes
// { path: '**', component: NotFoundComponent }
// New routes
// { path: 'index', component: IndexComponent },
// { path: 'pets', component: PetsComponent },
// // {
// //   path: 'pets', component: PetsComponent, children: [,
// //     { path: 'pets/new', component: NewComponent },
// //     // use a colon and parameter name to include a parameter in the url
// //     { path: 'pets/:id/edit', component: EditComponent },
// //     { path: 'pets/:id', component: ShowComponent }]
// // },
// // redirect to /pets if there is nothing in the url
// { path: '', pathMatch: 'full', redirectTo: '/pets' },
// // the ** will catch anything that did not match any of the above routes
// { path: '**', component: NotFoundComponent }
//working route
// const routes: Routes = [
//   { path: 'index', component: IndexComponent },
//   { path: 'pets', component: PetsComponent },
//   { path: 'new', component: NewComponent },
//   // use a colon and parameter name to include a parameter in the url
//   { path: 'edit/:id', component: EditComponent },
//   { path: 'show/:id', component: ShowComponent },
//   // redirect to /pets if there is nothing in the url
//   { path: '', pathMatch: 'full', redirectTo: '/pets' },
//   // the ** will catch anything that did not match any of the above routes
//   { path: '**', component: NotFoundComponent }
// ];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'public';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");





 // <-- import FormsModule.








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _new_new_component__WEBPACK_IMPORTED_MODULE_8__["NewComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
            _show_show_component__WEBPACK_IMPORTED_MODULE_12__["ShowComponent"],
            _pets_pets_component__WEBPACK_IMPORTED_MODULE_13__["PetsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");




let EditComponent = class EditComponent {
    constructor(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.updatePet = { name: "", kind: "", description: "", skill1: "", skill2: "", skill3: "", oldName: "" };
        this.petInfo = { name: "", kind: "", description: "", skill1: "", skill2: "", skill3: "" };
        this.showCreate = false;
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            console.log(params['id']);
            this.getTasksFromServiceById(params['id']);
        });
    }
    getTasksFromServiceById(id) {
        // this._httpService.getTasks();
        // console.log("This is from getTasksFromServiceById", id)
        let observableID = this._httpService.getPetsByID(id);
        observableID.subscribe((onedata) => {
            console.log("Got our one tasks!", onedata);
            this.petInfo = onedata;
            this.updatePet = onedata;
            this.updatePet.oldName = onedata.name;
            if (onedata.err) {
                if (onedata.db_error.name == "CastError") {
                    console.log("Got invalid id");
                    this.showCreate = true;
                }
            }
        });
    }
    onEdit(id) {
        let observableput = this._httpService.updatePets(id, this.updatePet);
        observableput.subscribe((data) => {
            // console.log("Got our out postdata!", puttdata);
            // console.log("This is the post data from app.components for updateTask", this.updateTask)
            if (data['err']) {
                console.log("this was an error", data);
                this.errors = data['errors'];
            }
            else {
                this._router.navigate(['/pets/' + id]);
                this.updatePet = { name: "", kind: "", description: "", skill1: "", skill2: "", skill3: "" };
            }
        });
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")).default]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    getPets() {
        return this._http.get('/pets');
    }
    getPetsByID(id) {
        return this._http.get(`/pets/${id}`); //you can also use this format for the parameter   get("/Pets/" + id)
    }
    addPets(newPet) {
        console.log("Post data from newAuthor in http.servic.ts in addTask method.", newPet);
        return this._http.post('/pets', newPet);
    }
    updatePets(id, updatePet) {
        console.log("Update data from updatePet in http.servic.ts in updatePet method.", updatePet);
        return this._http.put('/Pets/' + id, updatePet);
    }
    deletePets(id) {
        // console.log("Delete id from newTask in http.servic.ts in addTask method.", id);
        return this._http.delete('/pets/' + id);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");




let IndexComponent = class IndexComponent {
    constructor(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.newAuthor = { name: "" };
    }
    ngOnInit() {
        this.getTasksFromService();
    }
    getTasksFromService() {
        // this._httpService.getTasks();
        let observable = this._httpService.getPets();
        observable.subscribe(data => {
            console.log("Got our authors!", data);
            this.authors = data;
        });
    }
    onButtonDelete(id) {
        let observabledelete = this._httpService.deletePets(id);
        observabledelete.subscribe(deletedata => {
            console.log("Got our Id to delete!", deletedata);
            this.getTasksFromService();
        });
    }
};
IndexComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");




let NewComponent = class NewComponent {
    constructor(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.newPet = { name: "", kind: "", description: "", skill1: "", skill2: "", skill3: "", like: 0 };
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log("This is the submit data from new.component", this.newPet);
        let observablepost = this._httpService.addPets(this.newPet);
        observablepost.subscribe((data) => {
            console.log("Got our out postdata!", data);
            // console.log("This is the post data from app.components for newTask", this.newPet);
            if (data.err) {
                console.log("this was an error", data);
                this.errors = data.errors;
            }
            else {
                this._router.navigate(['/']);
                // this.newPet = {
                //   name: ""
                // }
            }
        });
    }
};
NewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new/new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")).default]
    })
], NewComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NotFoundComponent = class NotFoundComponent {
    constructor(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
    }
    goHome() {
        this._router.navigate(['/index']);
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/pets/pets.component.css":
/*!*****************************************!*\
  !*** ./src/app/pets/pets.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BldHMvcGV0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pets/pets.component.ts":
/*!****************************************!*\
  !*** ./src/app/pets/pets.component.ts ***!
  \****************************************/
/*! exports provided: PetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsComponent", function() { return PetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");




let PetsComponent = class PetsComponent {
    // newAuthor: any = { name: "" }
    constructor(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    ngOnInit() {
        this.getTasksFromService();
    }
    getTasksFromService() {
        // this._httpService.getTasks();
        let observable = this._httpService.getPets();
        observable.subscribe(data => {
            console.log("Got our Pets!", data);
            this.pets = data;
        });
    }
    onButtonDelete(id) {
        let observabledelete = this._httpService.deletePets(id);
        observabledelete.subscribe(deletedata => {
            console.log("Got our Id to delete!", deletedata);
            this.getTasksFromService();
        });
    }
};
PetsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
PetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pets.component.css */ "./src/app/pets/pets.component.css")).default]
    })
], PetsComponent);



/***/ }),

/***/ "./src/app/show/show.component.css":
/*!*****************************************!*\
  !*** ./src/app/show/show.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3cvc2hvdy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/show/show.component.ts":
/*!****************************************!*\
  !*** ./src/app/show/show.component.ts ***!
  \****************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");




let ShowComponent = class ShowComponent {
    constructor(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.petInfo = { name: "", kind: "", description: "", skill1: "", skill2: "", skill3: "", like: 0 };
        this.updatePet = { name: "", kind: "", description: "", skill1: "", skill2: "", skill3: "", like: 0 };
        this.showLike = true;
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            console.log(params['id']);
            this.getTasksFromServiceById(params['id']);
        });
    }
    getTasksFromServiceById(id) {
        // this._httpService.getTasks();
        // console.log("This is from getTasksFromServiceById", id)
        let observableID = this._httpService.getPetsByID(id);
        observableID.subscribe((onedata) => {
            console.log("Got our one tasks!", onedata);
            this.petInfo = onedata;
            this.updatePet = onedata;
            console.log("updatePet data", this.updatePet);
            // this.updateAuthor = onedata;
        });
    }
    onButtonDelete(id) {
        let observabledelete = this._httpService.deletePets(id);
        observabledelete.subscribe(deletedata => {
            console.log("Got our Id to delete!", deletedata);
            this._router.navigate(['/']);
        });
    }
    onButtonLike(id) {
        this.updatePet.like += 1;
        this.showLike = false;
        console.log("Got our Id to delete!", this.updatePet);
        let observableput = this._httpService.updatePets(id, this.updatePet);
        observableput.subscribe((data) => {
            // // console.log("Got our out postdata!", puttdata);
            // console.log("This is the post data from app.components for updateTask", this.updateTask)
            if (data['err']) {
                console.log("this was an error", data);
                this.errors = data['errors'];
            }
            // else {
            //   this._router.navigate(['/pets/' + id]);
            //   this.updatePet = { name: "", king: "", description: "", skill1: "", skill2: "", skill3: "" }
            // }
        });
    }
};
ShowComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
ShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show/show.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show.component.css */ "./src/app/show/show.component.css")).default]
    })
], ShowComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Armin-Laptop\Desktop\CJ\Bootcamp\mean_stack\Angular\MeanBlackBelt\MeanBlackBelt\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map