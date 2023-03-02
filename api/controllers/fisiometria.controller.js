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
exports.deleteFisiometria = exports.getFisiometriaById = exports.updateFisiometria = exports.getFisiometrias = exports.createFisiometria = void 0;
const Fisiometria_1 = require("../entities/Fisiometria");
const createFisiometria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fisiometria = new Fisiometria_1.Fisiometria();
        fisiometria.userId = req.body.userId;
        fisiometria.empresaId = req.body.empresaId;
        fisiometria.ritmoCardiaco = req.body.ritmoCardiaco;
        fisiometria.ritmoRespiratorio = req.body.ritmoRespiratorio;
        fisiometria.oximetria = req.body.oximetria;
        fisiometria.presionArterialSistolica = req.body.presionArterialSistolica;
        fisiometria.presionArterialDiastolica = req.body.presionArterialDiastolica;
        fisiometria.temperatura = req.body.temperatura;
        fisiometria.suenoSuperficial = req.body.suenoSuperficial;
        fisiometria.suenoProfundo = req.body.suenoProfundo;
        fisiometria.vecesDespierto = req.body.vecesDespierto;
        fisiometria.numeroPasos = req.body.numeroPasos;
        fisiometria.valorIndice = req.body.valorIndice;
        fisiometria.estandarAlarma = req.body.estandarAlarma;
        fisiometria.valorAlarma1 = req.body.valorAlarma1;
        fisiometria.valorAlarma2 = req.body.valorAlarma2;
        fisiometria.valorAlarma3 = req.body.valorAlarma3;
        fisiometria.fechaRegistro = req.body.fechaRegistro;
        fisiometria.fechaToma = req.body.fechaToma;
        fisiometria.estadoRegistro = req.body.estadoRegistro;
        yield fisiometria.save();
        res.send({ req: req.body });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
});
exports.createFisiometria = createFisiometria;
const getFisiometrias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fisiometrias = yield Fisiometria_1.Fisiometria.find();
        return res.json(fisiometrias);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
});
exports.getFisiometrias = getFisiometrias;
const updateFisiometria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let fisiometria = yield Fisiometria_1.Fisiometria.findOneBy({ id: id });
        if (!fisiometria)
            return res.status(404).json({ error: "fisiometria not found" });
        yield Fisiometria_1.Fisiometria.update({ id: id }, req.body);
        const updatedFisiometria = yield Fisiometria_1.Fisiometria.findOneBy({ id: id });
        return res.status(200).json(updatedFisiometria);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
});
exports.updateFisiometria = updateFisiometria;
const getFisiometriaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const fisiometria = yield Fisiometria_1.Fisiometria.findOneBy({ id: id });
        if (!fisiometria) {
            return res.status(404).json({ error: "Fisiometría no encontrada" });
        }
        res.json(fisiometria);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
});
exports.getFisiometriaById = getFisiometriaById;
const deleteFisiometria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const fisiometria = yield Fisiometria_1.Fisiometria.findOneBy({ id: id });
        if (!fisiometria) {
            return res.status(404).json({ error: "Fisiometría no encontrada" });
        }
        yield fisiometria.remove();
        res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
});
exports.deleteFisiometria = deleteFisiometria;
