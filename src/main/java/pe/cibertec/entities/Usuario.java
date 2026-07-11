package pe.cibertec.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.engine.internal.Nullability;

@Data
@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private String nombre;

    @Column(nullable = true)
    private String correo;

    @Column(nullable = true)
    private String clave;
}
