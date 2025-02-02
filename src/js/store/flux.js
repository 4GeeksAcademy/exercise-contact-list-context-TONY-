const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			agregarContacto: (name, email, phone, address) => {
				//Objeto con la informacion que queremos enviar al fetch
				let datos = {
					full_name: name,
					email: email,
					agenda_slug: "Anthony",
					address: address,
					phone: phone
				};
				//Esta es la url donde se va a realizar el post con su respetiva configuracion (method, body, headers)
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(datos),
					headers: { "Content-Type": "application/json" }
				})
					//Estas son las promesas que convierte en .json y va a mostrar en consola
					.then(response => response.json()) //la respuesta se transformara en .json
					.then(data => console.log(data)) //muestra la info por consola
					.catch(error => console.log(error)); //muestra algun error por consola
			},
			obtenerContactos: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Anthony")
					//Es un GET al no especificar explicitamente el metodo
					.then(response => response.json()) //la respuesta se transformara en .json
					.then(data => setStore({ contactos: data })) //Guardara la info en contactos
					.catch(error => console.log(error)); //muestra algun error por consola
			},
			borrarContactos: id => {
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json()) //la respuesta se transformara en .json
					.then(data => console.log(data)) //muestra la info por consola
					.catch(error => console.log(error)); //muestra algun error por consola
			},
			editarContacto: (name, email, phone, address, id) => {
				//Objeto con la informacion que queremos enviar al fetch
				let datos = {
					full_name: name,
					email: email,
					agenda_slug: "Anthony",
					address: address,
					phone: phone
				};
				//Esta es la url donde se va a realizar el post con su respetiva configuracion (method, body, headers)
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(datos),
					headers: { "Content-Type": "application/json" }
				})
					//Estas son las promesas que convierte en .json y va a mostrar en consola
					.then(response => response.json()) //la respuesta se transformara en .json
					.then(data => console.log(data)) //muestra la info por consola
					.catch(error => console.log(error)); //muestra algun error por consola
			}
		}
	};
};

export default getState;
