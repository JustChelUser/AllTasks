"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDataSource = exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const path_1 = __importDefault(require("path"));
const databasePath = path_1.default.join(__dirname, "..", process.env.DB_NAME.toString());
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: databasePath,
    synchronize: true,
    entities: [User_1.User],
});
const initDataSource = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.AppDataSource.initialize();
    console.log("Database connected and initialized");
});
exports.initDataSource = initDataSource;
(0, exports.initDataSource)().catch((error) => console.log("Database connection error: ", error));
//# sourceMappingURL=data-source.js.map