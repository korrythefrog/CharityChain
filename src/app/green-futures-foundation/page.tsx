"use client";

import React from "react";
import Image from "next/image";
import trees from '/src/image/trees.jpg'
import InfoCard from "@/components/info-card";
import { Typography } from "@material-tailwind/react";
import { Navbar, Footer } from "@/components"
import { ethers } from "ethers";
import erc20abi from "./ERC20abi.json";
import TxList from "./TxList"
import { useState, useEffect } from "react";

const OPTIONS = [
  {
    title: "Donation History",
    description: "Learning Courses",
  },
  {
    title: "Transaction History",
    description: "Expert Instructors",
  },
];

export function GreenFuturesFoundation() {
  const [txs, setTxs] = useState([]);
  const [txs2, setTxs2] = useState([]);
  console.log('re-render')

  const [but, setBut] = useState("");

  useEffect(() => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const erc20 = new ethers.Contract(
      "0xaA771801045F8E0B726c968338e138999e2b333d",
      erc20abi,
      provider
    );

    erc20.on("Transfer", (from, to, amount, event) => {
    //  console.log({ from, to, amount, event });
      console.log(but)
      // if isLoading = false {}
      if (but == "donate") {
        setTxs((currentTxs) => {
          // isLoading = false
          return [
          ...currentTxs,
          {
            txHash: event.transactionHash,
            from,
            to,
            amount: String(amount),
          },
        ]});
      }
      else if (but == "buy") {
        setTxs2((currentTxs) => {
          // isLoading = false
          return [
          ...currentTxs,
          {
            txHash: event.transactionHash,
            from,
            to,
            amount: String(amount),
          },
        ]});
      }
    })
  }, ["0xaA771801045F8E0B726c968338e138999e2b333d", but]);

  useEffect(() => {
    console.log(txs);
    console.log(txs2);
  }, [txs, txs2])
  const handleTransfer = async (e) => {
    e.preventDefault();
    const formId = e.target.id
    //console.log(id)
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract("0xaA771801045F8E0B726c968338e138999e2b333d", erc20abi, signer);
    await erc20.transfer(data.get("recipient"), data.get("amount"));
    setBut(formId)
 
  };

  const handleTransfer2 = async (e) => {
    e.preventDefault();
    const formId = e.target.id
    //console.log(id)
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract("0xaA771801045F8E0B726c968338e138999e2b333d", erc20abi, signer);
    await erc20.transfer(data.get("recipient"), data.get("amount"));
    setBut(formId)
 
  };

  return (
    <><Navbar /><section className="py-20 px-8">
        <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto items-center">

          {/* Banner Image */}
          <div className="relative mx-auto max-w-lg px-4 lg:px-0 text-center">
            <Image src={trees} alt="Banner" />
            <div className="relative z-10">
              <Typography variant="h2" color="blue-gray" className="mb-4" children={undefined} placeholder={undefined}>
                Green Futures Foundation
              </Typography>
              <Typography
                variant="lead"
                className="mb-5 px-4 text-center text-xl !text-gray-500 lg:px-0"
              >
                Environmental Advancement
              </Typography>
            </div>
          </div>

          {/* Centered Cards with Equal Gap */}
          <div className="flex justify-center gap-8">
            <div className="w-1/3"> {/* Adjust width as needed */}
                <InfoCard key= "Donation History" title="Donation History">
                  Learning Courses
                </InfoCard>
                <TxList txs={txs}/>
            </div>
            <div className="w-1/3"> {/* Adjust width as needed */}
                <InfoCard key="Transaction History" title="Transaction History">
                  Expert Instructors
                </InfoCard> 
                <TxList txs={txs2}/>
            </div>
          </div>
        </div>
        <form onSubmit={handleTransfer} id = "donate">
            <div className="my-3">
              <input
                type="text"
                name="recipient"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Recipient address"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                name="amount"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Amount to transfer"
              />
            </div>
            <footer className="p-4">
              <button
                type="submit"
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
              >
                Donate
              </button>
            </footer>
          </form>
            <form onSubmit={handleTransfer2} id = "buy">
              <div className="my-3">
                <input
                  type="text"
                  name="recipient"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Recipient address"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  name="amount"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Amount to transfer"
                />
              </div>
              <footer className="p-4">
                <button
                  type="submit"
                  className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                >
                  Buy
                </button>
              </footer>
            </form>
      </section><Footer /></>
  );
}

export default GreenFuturesFoundation;
