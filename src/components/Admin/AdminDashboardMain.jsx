import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import {
  AiOutlineArrowRight,
  AiOutlineMoneyCollect,
} from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersOfAdmin,
} from "../../redux/actions/order";
import Loader from "../Layout/Loader";
import { getAllSellers } from "../../redux/actions/sellers";

const AdminDashboardMain = () => {
  const dispatch = useDispatch();

  const { adminOrders, adminOrderLoading } = useSelector(
    (state) => state.order
  );
  const { sellers } = useSelector((state) => state.seller);

  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
    dispatch(getAllSellers());
  }, []);

  const adminEarning =
    adminOrders &&
    adminOrders.reduce(
      (acc, item) => acc + item.totalPrice * 0.1,
      0
    );
  const adminBalance = adminEarning?.toFixed(2);

  const columns = [
    { field: "id", headerName: "ID do pedido", minWidth: 150, flex: 0.7 },
  ];

  const rows = adminOrders
    ? adminOrders.map((item) => ({
        id: item._id,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: item?.totalPrice + " $",
        status: item?.status,
        createdAt: item?.createdAt.slice(0, 10),
      }))
    : [];

  return (
    <>
      {adminOrderLoading ? (
        <Loader />
      ) : (
        <div className="w-full p-4">
          <h3 className="text-[22px] font-Poppins pb-2">Visão geral</h3>
          <br />
          <h3 className="text-[22px] font-Poppins pb-2">
            Últimos Pedidos
          </h3>
          <div className="w-full min-h-[45vh] bg-white rounded">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={4}
              disableSelectionOnClick
              autoHeight
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboardMain;
