function hasRole(user, role) {
    return user?.authorities?.map(({ authority }) => authority).includes(role);
}

export default hasRole;