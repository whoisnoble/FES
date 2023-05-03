function User({ id, name, email, username }) {
    return (
        <div key={id} style={{border: `2px old black`}}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{username}</div>
        </div>
    );
}

export default User;