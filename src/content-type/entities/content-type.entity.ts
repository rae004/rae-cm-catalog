import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ContentType {
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

  // @OneToMany(() => Field, (field) => field.contentType)
  // fields?: Field[];
}
