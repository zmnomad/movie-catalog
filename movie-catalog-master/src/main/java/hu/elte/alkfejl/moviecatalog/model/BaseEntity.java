package hu.elte.alkfejl.moviecatalog.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;
import lombok.Data;

@Data
@MappedSuperclass
public class BaseEntity {
    
    //ID-val is rendelkeznie kell, hisz az adatbázisban is van, egy pontos sablonját kell létrehozni az adatbázisnak.
    //Ami az adatbázisban szerepel, annak itt is szerepelnie kell és fordítva.
    @Id //primary key, ezzel jelezzük
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    Long id;
    
    //@Version használatára azért van szükség, mert egyszerre több felhasználó is módosíthatja az adatokat, 
    //ilyenkor ez a változó segíti a fennakadás mentes munkát( minden a háttérben történik, ezzel nem kell foglalkoznunk)
    @Version
    private int version;
    
}
