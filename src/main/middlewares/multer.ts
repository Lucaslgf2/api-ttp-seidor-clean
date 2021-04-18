import multer from 'multer'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('./temp/uploads'))
  },

  filename: function (req, file, cb) {
    cb(null, `${uuidv4()}_${file.originalname}`)
  }
})

const limits = {
  fileSize: 2 * 1021 * 1024
}

const fileFilter = (req, file, cb): void => {
  const allowedFileExtensions = [
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/gif',
    'application/pdf'
  ]

  if (allowedFileExtensions.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error('Tipo de Arquivo inválido'), false)
  }
}

export const uploads = multer({ storage, limits, fileFilter })
