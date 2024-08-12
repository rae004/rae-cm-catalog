import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field } from '@/field/entities/field.entity';

@Entity()
export class FieldValue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  displayName: string;

  @Column()
  parameterName: string;

  @Column()
  slug: string;

  @ManyToOne(() => Field, (field) => field.fieldValues)
  @JoinColumn()
  field?: Field;
}
