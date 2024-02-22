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
exports.getSpecificUser = exports.deleteUser = exports.updateUser = exports.getAllUser = exports.loginUser = exports.registerUser = void 0;
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, fullname, email, password, bio, designation, links, location } = req.body;
    const user = yield prisma.user.create({
        data: { username, fullname, email, password, bio, designation, links, location }
    });
    const token = jsonwebtoken_1.default.sign({ email: email, password: password }, process.env.TOKEN_SECRET);
    console.log(token);
    console.log(user);
    // console.log(user);
    res.status(201).json({
        msg: "user inserted",
        user: user,
        token
    });
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const token = jsonwebtoken_1.default.sign({ email: email, password: password }, process.env.TOKEN_SECRET);
    const user = yield prisma.user.findFirst({
        where: {
            email: email
        }
    });
    if ((user === null || user === void 0 ? void 0 : user.password) === password) {
        return res.status(200).json({
            msg: "login success",
            token
        });
    }
    console.log(user);
    // console.log(user);
    res.status(404).json({
        msg: "not authorized",
    });
});
exports.loginUser = loginUser;
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const users = yield prisma.user.findMany();
    console.log((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    res.status(200).json({
        msg: "success",
        users: users
    });
});
exports.getAllUser = getAllUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const field = req.body;
    const id = (_b = req.user) === null || _b === void 0 ? void 0 : _b.id;
    console.log('field', field, "id", id);
    const existingUser = yield prisma.user.findUnique({
        where: {
            id: id
        }
    });
    if (!existingUser) {
        return res.status(404).json({ msg: "user not found" });
    }
    const updatedUser = yield prisma.user.update({
        where: { id: id },
        data: Object.assign(Object.assign({}, existingUser), field)
    });
    res.status(200).json({
        msg: 'User updated',
        user: updatedUser,
    });
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield prisma.user.delete({
        where: { id: id }
    });
    res.status(200).json({
        msg: "user deleted successfully"
    });
});
exports.deleteUser = deleteUser;
const getSpecificUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const id : number = parseInt(req.params.id)
    const username = req.params.username.toString();
    const user = yield prisma.user.findUnique({
        where: { username: username },
        include: {
            tweets: true
        }
    });
    if (!user) {
        return res.status(404).json({
            msg: "user not found"
        });
    }
    res.status(200).json({
        msg: "user found",
        user: user
    });
});
exports.getSpecificUser = getSpecificUser;
