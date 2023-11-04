"use client"
import React, { useState, useEffect } from 'react';
import { IoIosSend } from "react-icons/io";
import { FaNode, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa"
import { SiNextdotjs, SiExpress } from "react-icons/si"

export default function page() {
	const [data, setData] = useState({});
	const [page, setPage] = useState(0);

	useEffect(() => {
		const pg = localStorage.getItem("pg") || localStorage.setItem("pg", "0");

		if (page === 0) {
			document.getElementById("lb").setAttribute("disabled", "disabled");
		} else if (page === data.card_code?.length - 1) {
			document.getElementById("rb").setAttribute("disabled", "disabled");
		}

		fetch('/data.json')
			.then((res) => res.json())
			.then((res) => {
				setData(res);
			});
	}, []);

	const handleLeft = () => {
		setPage(page - 1);
	}

	const handleRight = () => {
		setPage(page + 1);
	}

	return (
		<>
			<div className="block pl-0 pt-10 md:hidden flex flex-col justify-center items-center">
				<p className="text-lg font-bold text-center">The Programming I Use</p>
				<div className="card card-compact flex justify-center bg-base-100 shadow-xl py-5 pl-0 my-5 max-w-md border-t scale-[88vw]">
					<div className="card-body"> 
						<h2 className="card-title border-b"><img src={data.card_code?.[page]?.icon} alt={data.card_code?.[page]?.name + " icon"} className="w-6 h-6"/>{data.card_code?.[page]?.name}</h2>
						<p>{data.card_code?.[page]?.description}</p>
						<div className="card-actions justify-center items-center text-center space-x-8 md:hidden">
							<button id="lb" onClick={handleLeft} className="btn btn-active btn-ghost" disabled={page === 0}>&lt;</button>
							<button className="btn btn-primary" onClick={() => {window.open(data.card_code?.[page]?.url)}}><IoIosSend /></button>
							<button id="rb" onClick={handleRight} className="btn btn-active btn-ghost" disabled={page === data.card_code?.length - 1}>&gt;</button>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col hidden relative md:block">
				<p className="text-lg font-bold text-center">The Programming I Use</p>
				{data.card_code?.map((card, index) => (
					<div key={index} className="card card-compact w-96 bg-base-100 shadow-xl my-10 group hover:scale-110 hover:cursor-pointer">
						<div className="card-body">
							<h2 className="card-title border-b"><img src={card.icon} className="w-6 h-6"/>{card.name}</h2>
							<p>{card.description}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
