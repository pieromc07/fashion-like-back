const { User } = require('../../model/User');


const create = async (req, res) => {

    const { email, password, fullname, rol_id } = req.body;

    try {
        const user = await User.create({
            email: email,
            password: password,
            fullname: fullname,
            rol_id: rol_id
        });
        if (user) {
            res.status(201).json({
                message: 'User created',
                user
            });
        } else {
            res.status(500).json({
                message: 'User not created'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error creating user',
            error
        });
    }

}

module.exports = { create };