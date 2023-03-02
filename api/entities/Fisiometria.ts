import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn, Generated } from 'typeorm';

@Entity()
export class Fisiometria extends BaseEntity {
    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid") id: string;

    @Column({nullable:true})
    userId: string;

    @Column({nullable:true})
    empresaId: string;

    @Column({nullable:true})
    ritmoCardiaco: number;

    @Column({nullable:true})
    ritmoRespiratorio: number;

    @Column({nullable:true})
    oximetria: number;

    @Column({nullable:true})
    presionArterialSistolica: number;

    @Column({nullable:true})
    presionArterialDiastolica: number;

    @Column({ type: 'float',nullable:true })
    temperatura: number;

    @Column({nullable:true})
    suenoSuperficial: number;

    @Column({nullable:true})
    suenoProfundo: number;

    @Column({nullable:true})
    vecesDespierto: number;

    @Column({nullable:true})
    numeroPasos: number;

    @Column({nullable:true})
    valorIndice: number;

    @Column({nullable:true})
    estandarAlarma: string;

    @Column({nullable:true})
    valorAlarma1: number;

    @Column({nullable:true})
    valorAlarma2: number;

    @Column({nullable:true})
    valorAlarma3: number;

    @Column({nullable:true})
    fechaRegistro: Date;

    @Column({nullable:true})
    fechaToma: Date;

    @Column({nullable:true})
    estadoRegistro: string;
}
