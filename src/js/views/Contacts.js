import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Editar } from "../component/Editar.js";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});

	useEffect(() => {
		actions.obtenerContactos();
	}, []); // revisar TodoList

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactos.map(item => (
							<ContactCard
								name={item.full_name}
								phone={item.phone}
								address={item.address}
								email={item.email}
								id={item.id}
								key={item.id}
								onDelete={() => setState({ showModal: true, id: item.id })}
								onEdit={() => setState({ showModal: true, id: item.id })}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
			<Editar show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
