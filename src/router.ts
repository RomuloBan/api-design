import {Router} from 'express'

const router = Router()

/*
 * Product routes
 */
router.get('/product', (req, res) => {
  res.json({
    message: 'Hello World'
  })
})
router.get('/product/:id', (req, res) => {})
router.put('/product/:id', (req, res) => {})
router.post('/product/', (req, res) => {})
router.delete('/product/:id', (req, res) => {})

/*
 * Update routes
 */
router.get('/update', (req, res) => {})
router.get('/update/:id', (req, res) => {})
router.put('/update/:id', (req, res) => {})
router.post('/update/', (req, res) => {})
router.delete('/update/:id', (req, res) => {})

/*
 * Update Point routes
 */
router.get('/updatepoint', (req, res) => {})
router.get('/updatepoint/:id', (req, res) => {})
router.put('/updatepoint/:id', (req, res) => {})
router.post('/updatepoint/', (req, res) => {})
router.delete('/updatepoint/:id', (req, res) => {})

export default router 