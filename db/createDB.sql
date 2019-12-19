-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hixe
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hixe
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `hixe` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema hixe
-- -----------------------------------------------------
USE `hixe` ;

-- -----------------------------------------------------
-- Table `hixe`.`states`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hixe`.`states` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hixe`.`difficulties`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hixe`.`difficulties` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hixe`.`races`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hixe`.`races` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `startDate` DATETIME NOT NULL,
  `endDate` DATETIME NOT NULL,
  `formType` VARCHAR(20) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `meetingLocation` VARCHAR(45) NOT NULL,
  `meetingHour` TIME NOT NULL,
  `heightDifference` INT(5) NOT NULL,
  `maxParticipant` INT(3) NOT NULL,
  `state_id` INT NOT NULL,
  `difficulty_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_races_states1_idx` (`state_id` ASC) VISIBLE,
  INDEX `fk_races_difficulties1_idx` (`difficulty_id` ASC) VISIBLE,
  CONSTRAINT `fk_races_states1`
    FOREIGN KEY (`state_id`)
    REFERENCES `hixe`.`states` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_races_difficulties1`
    FOREIGN KEY (`difficulty_id`)
    REFERENCES `hixe`.`difficulties` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hixe`.`groups`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hixe`.`groups` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hixe`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hixe`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `group_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_groups1_idx` (`group_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_groups1`
    FOREIGN KEY (`group_id`)
    REFERENCES `hixe`.`groups` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hixe`.`participants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hixe`.`participants` (
  `user_id` INT NOT NULL,
  `race_id` INT NOT NULL,
  `isOwner` TINYINT NOT NULL,
  INDEX `fk_users_has_races_races1_idx` (`race_id` ASC) VISIBLE,
  INDEX `fk_users_has_races_users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_races_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `hixe`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_races_races1`
    FOREIGN KEY (`race_id`)
    REFERENCES `hixe`.`races` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hixe`.`materials`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hixe`.`materials` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hixe`.`neededMaterials`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hixe`.`neededMaterials` (
  `material_id` INT NOT NULL,
  `race_id` INT NOT NULL,
  INDEX `fk_materials_has_races_races1_idx` (`race_id` ASC) VISIBLE,
  INDEX `fk_materials_has_races_materials1_idx` (`material_id` ASC) VISIBLE,
  CONSTRAINT `fk_materials_has_races_materials1`
    FOREIGN KEY (`material_id`)
    REFERENCES `hixe`.`materials` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_materials_has_races_races1`
    FOREIGN KEY (`race_id`)
    REFERENCES `hixe`.`races` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO `groups`(name) VALUES ('Junior');
INSERT INTO materials(name,description) VALUES('Chaussure','Chaussure de ski ou de snowboard adapté');
INSERT INTO users(firstname,lastname,password,email,group_id) VALUES('Jarod','Streckeisen','1234','jarod.streckeisen@cpnv.ch',1);
INSERT INTO states(name) VALUES ('Crée'),('Annulée'),('Inscription ouvert');
INSERT INTO difficulties(name) VALUES ('Facile'),('Moyen'),('Difficile');
INSERT INTO races(name,description,startDate,endDate,formType,location,meetingLocation,meetingHour,heightDifference,maxParticipant,state_id,difficulty_id) VALUES ('Randonnée','Randonnée du col de Zermatt jusqu au sommet',NOW(),NOW(),'Basic','Zermatt','Gare de Zermatt',current_time(),450,12,1,1);
INSERT INTO neededMaterials(material_id,race_id) VALUES(1,1);

INSERT INTO participants(user_id,race_id,isOwner) VALUES(1,1,0);