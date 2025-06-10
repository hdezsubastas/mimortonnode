import {Router} from 'express'
import {getComprasMiMorton, getContratosMiMorton, getVentasMiMorton, getDetailMiMorton, getDetailSaleMiMorton2, getDetailSales, getRecibo, getDetailByLot, getSales,getSalesAll, getAllSubasta, getEmailCliente, getEmailCliente_Notificaciones, getEmailCliente_NotificacionesDatos, getNextAuctionDateLot, getAmountDebt, getEmail, getEmail2, getVentasMiMortonWS,getAllSubastaBuys, getMortonDebts, getLotsByRcpt, getReceipt, getAbsenteeOffers,getBidderInfo, getNextAuctionLot, getReserveLots, getVipClients, getAbsenteeOffers2, getCardBank, getDebts, getBidHist, getArrReport} from '../controllers/morton.controllers.js';

const router = Router()

router.get('/getComprasMiMorton/:no_cliente', getComprasMiMorton);
router.get('/getContratosMiMorton/:no_cliente', getContratosMiMorton);
router.get('/getVentasMiMorton/:no_cliente', getVentasMiMorton);
router.get('/getDetailMiMorton/:refno', getDetailMiMorton);
router.get('/getDetailSaleMiMorton2/:id1/:id2/:id3/:id4', getDetailSaleMiMorton2);
router.get('/getDetailSales/:invno/:id/:id2', getDetailSales)
router.get('/getRecibo/:recibo', getRecibo);
router.get('/getDetailByLot/:receipt/:lot/:saleno', getDetailByLot)
router.get('/getSales/:filtro', getSales);
router.get('/getSalesAll/:filtro', getSalesAll);
router.get('/getAllSubasta/:id', getAllSubasta);
router.get('/getEmailCliente/:id', getEmailCliente);
router.get('/getEmailCliente_Notificaciones/:id', getEmailCliente_Notificaciones);
router.get('/getEmailCliente_NotificacionesDatos/:id', getEmailCliente_NotificacionesDatos);
router.get('/getNextAuctionDateLot/:refno/:date', getNextAuctionDateLot);
router.get('/getAmountDebt/:invno', getAmountDebt);
router.get('/getEmail/:id', getEmail);
router.get('/getEmail2/:id', getEmail2);
router.get('/getVentasMiMortonWS/:no_cliente', getVentasMiMortonWS);
router.get('/getAllSubastaBuys/:id',getAllSubastaBuys);
router.get('/getMortonDebts/:sale', getMortonDebts);
router.get('/getLotsByRcpt/:receipt/:saleno', getLotsByRcpt);
router.get('/getReceipt/:receipt/', getReceipt);
router.get('/getAbsenteeOffers/:saleno', getAbsenteeOffers);
router.get('/getBidderInfo/:custno/:saleno/:bidder', getBidderInfo);
router.get('/getNextAuctionLot/:refno', getNextAuctionLot);
router.get('/getReserveLots/:saleno', getReserveLots);
router.get('/getVipClients', getVipClients);
router.get('/getAbsenteeOffers2/:saleno', getAbsenteeOffers2);
router.get('/getCardBank/:card', getCardBank);
router.get('/getDebts/:no_cliente', getDebts);
router.get('/getBidHist/:desc', getBidHist);
router.get('/getArrReport/:saleno', getArrReport);




export default router;