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
exports.deleteAudits = exports.getAuditId = exports.updateAudits = exports.getAudits = exports.createAudit = void 0;
const Audit_1 = require("../entities/Audit");
const createAudit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { method, status, type, response } = req.body;
        const entity = new Audit_1.Audit();
        entity.method = method;
        entity.status = status;
        entity.type = type;
        entity.response = response;
        yield entity.save();
        res.send({ "req": req.body });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "error": error.message });
        }
    }
});
exports.createAudit = createAudit;
const getAudits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const audits = yield Audit_1.Audit.find();
        return res.json(audits);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "error": error.message });
        }
    }
});
exports.getAudits = getAudits;
const updateAudits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let audit = yield Audit_1.Audit.findOneBy({ id: id });
        if (!audit)
            return res.status(404).json({ "error": "audit not found" });
        Audit_1.Audit.update({ id: id }, req.body);
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "error": error.message });
        }
    }
});
exports.updateAudits = updateAudits;
const getAuditId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let audit = yield Audit_1.Audit.findOneBy({ id: id });
        if (!audit)
            return res.status(404).json({ "error": "audit not found" });
        console.log(audit);
        return res.json(audit);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "error": error.message });
        }
    }
});
exports.getAuditId = getAuditId;
const deleteAudits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let audit = yield Audit_1.Audit.delete({ id: id });
        if (!audit)
            return res.status(404).json({ "error": "audit not found" });
        const result = yield Audit_1.Audit.delete({ id: id });
        console.log(result);
        if (!result.affected)
            return res.status(204).send("deleted audit");
        else
            return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "error": error.message });
        }
    }
});
exports.deleteAudits = deleteAudits;
