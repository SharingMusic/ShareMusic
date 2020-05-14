<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<link href="<c:url value="/resources/css/header.css"/>" rel="stylesheet">




<div class="header">
	<i class="fas fa-bars"></i> <span class="title">ShareMusic</span>

	<button type="button"
		class="btn btn-default dropdown-toggle btn-sm float-right"
		data-toggle="dropdown">
		<i class="fas fa-user-circle"></i> <span class="user-name">Mingon</span>
	</button>

	<div class="dropdown-menu">
		<a class="dropdown-item" href="#">Profile</a> <a class="dropdown-item"
			href="#">My Collection</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Logout</a>
	</div>
</div>
