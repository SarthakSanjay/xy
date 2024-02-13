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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpecificUser = exports.deleteUser = exports.updateUser = exports.insertUser = exports.getAllUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    res.status(200).json({
        msg: "success",
        users: users
    });
});
exports.getAllUser = getAllUser;
const insertUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const user = yield prisma.user.create({
        data: body
    });
    console.log(body);
    // console.log(user);
    res.status(201).json({
        msg: "user inserted",
        user: user
    });
});
exports.insertUser = insertUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const field = req.body;
    const id = parseInt(req.params.id);
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
