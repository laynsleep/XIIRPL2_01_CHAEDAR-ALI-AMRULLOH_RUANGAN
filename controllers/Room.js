const Room = require('../models/Room')

module.exports = {
    // Tampil semua ruangan
    index: async (req, res) => {
        try {
            const rooms = await Room.find();
            if(rooms.length > 0){
                res.status(200).json({
                    status: true,
                    data: rooms,
                    method: req.method,
                    url: req.url
                })
            } else {
                res.json({
                    status: false,
                    message: 'Tidak ada data yang dikembalikan'
                })
            }
        } catch (error) {
            res.status(400).json({success: false});
        }
    },

    // Tampil satu ruangan
    show: async (req, res) => {
        try {
            const room = await Room.findById(req.params.id);
            res.status(200).json({
                status: true,
                data: room,
                method: req.method,
                url: req.url,
                message: 'Berhasil menampilkan data'
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },

    // Menambahkan data ruangan
    store: async (req, res) => {
        try {
            const room = await Room.create(req.body)
            res.status(200).json({
                status: true,
                data: room,
                method: req.method,
                url: req.url,
                message: 'Berhasil menambahkan data'
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },

    // Memperbarui data ruangan
    update: async (req, res) => {
        try {
            const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.status(200).json({
                status: true,
                data: room,
                method: req.method,
                url: req.url,
                message: 'Berhasil memperbarui data'
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },

    // Menghapus data ruangan
    delete: async (req, res) => {
        try {
            await Room.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status: true,
                method: req.method,
                url: req.url,
                message: 'Berhasil menghapus data'
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    }
}