export const snapshot = (snapshot) => {
	const dades = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	console.log(dades);
};

export const user = (user) => {
	console.log("Estat d'usuari:", user);
};
