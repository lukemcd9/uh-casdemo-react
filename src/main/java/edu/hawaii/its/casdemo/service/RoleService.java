package edu.hawaii.its.casdemo.service;

import edu.hawaii.its.casdemo.repository.RoleRepository;
import edu.hawaii.its.casdemo.type.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public List<Role> findAll() {
        return roleRepository.findAll();
    }

    public Role find(Integer id) {
        Optional<Role> role = roleRepository.findById(id);
        return role.isPresent() ? role.get() : null;
    }

    public Role findByRole(String role) {
        return roleRepository.findByRole(role);
    }

}
