const Joi = require('joi');

const validateUser = (req, res, next) => {
    const schema = Joi.object({
        rol: Joi.string().required(),
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const validateAppointment = (req, res, next) => {
    const schema = Joi.object({
        date: Joi.date().required(),
        hours: Joi.number().integer().required(),
        place: Joi.string().required(),
        description: Joi.string().required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const validateBundleItem = (req, res, next) => {
    const schema = Joi.object({
        bundleID: Joi.number().integer().required(),
        itemID: Joi.number().integer().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = {
    validateUser,
    validateAppointment,
    validateBundleItem
};