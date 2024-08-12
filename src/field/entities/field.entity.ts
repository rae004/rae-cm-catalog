import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ContentType } from '@/content-type/entities/content-type.entity';
import { FieldValue } from '@/field-values/entities/field-value.entity';

@Entity()
export class Field {
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

  @ManyToOne(() => ContentType, (contentType) => contentType.fields)
  @JoinColumn()
  contentType?: ContentType;

  @OneToMany(() => FieldValue, (fieldValue) => fieldValue.field)
  fieldValues?: FieldValue[];
}
