import type { StackItem } from "./types";

// imports reales para que Vite los procese bien
import react from "../../assets/stack/react.svg";
import typescript from "../../assets/stack/typescript.svg";
import vite from "../../assets/stack/vite.svg";
import tailwind from "../../assets/stack/tailwindcss.svg";
import python from "../../assets/stack/python.svg";
import postgresql from "../../assets/stack/postgresql.svg";
import docker from "../../assets/stack/docker.svg";
import java from "../../assets/stack/java.svg";
import node from "../../assets/stack/nodejs.svg";
import html from "../../assets/stack/html5.svg";
import css from "../../assets/stack/css3.svg";
import javascript from "../../assets/stack/javascript.svg";
import git from "../../assets/stack/git.svg";
import expressks from "../../assets/stack/expressjs.svg";
import mysql from "../../assets/stack/mysql.svg";
import nextjs from "../../assets/stack/nextjs.svg";
import sqlserver from "../../assets/stack/sqlserver.svg";
import nestjs from "../../assets/stack/nestjs.svg";
import spring from "../../assets/stack/springboot.svg";
export const STACK: readonly StackItem[] = [
   //FRONTEND
   { key: "html", label: "HTML", icon: html, category: "frontend" },
   { key: "css", label: "CSS", icon: css, category: "frontend" },
   { key: "react", label: "React 19", icon: react, category: "frontend" },
   { key: "vite", label: "Vite", icon: vite, category: "frontend" },
   {
      key: "tailwind",
      label: "Tailwind v4",
      icon: tailwind,
      category: "frontend",
   },
   { key: "nextjs", label: "Next.js", icon: nextjs, category: "frontend" },
   //LENGUAGE
   {
      key: "javascript",
      label: "JavaScript",
      icon: javascript,
      category: "language",
   },
   {
      key: "typescript",
      label: "TypeScript",
      icon: typescript,
      category: "language",
   },
   { key: "python", label: "Python", icon: python, category: "language" },
   { key: "java", label: "Java", icon: java, category: "language" },
   //BACKEND AND RUNTIME
   {
      key: "node",
      label: "Node.js",
      icon: node,
      category: "backend and runtime",
   },
   {
      key: "express",
      label: "Express.js",
      icon: expressks,
      category: "backend and runtime",
   },
   {
      key: "nestjs",
      label: "NestJS",
      icon: nestjs,
      category: "backend and runtime",
   },
   {
      key: "spring",
      label: "Spring Boot",
      icon: spring,
      category: "backend and runtime",
   },
   {
      key: "docker",
      label: "Docker",
      icon: docker,
      category: "backend and runtime",
   },
   { key: "git", label: "Git", icon: git, category: "backend and runtime" },
   //Databases
   {
      key: "mysql",
      label: "MySQL",
      icon: mysql,
      category: "database",
   },
   {
      key: "postgresql",
      label: "PostgreSQL",
      icon: postgresql,
      category: "database",
   },
   {
      key: "sqlserver",
      label: "SQL Server",
      icon: sqlserver,
      category: "database",
   },
] as const;
