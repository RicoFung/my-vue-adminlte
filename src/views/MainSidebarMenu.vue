<template>
<nav class="mt-2">
  <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
    <!-- Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library -->
     <li class="nav-item">
      <router-link to="/home" class="nav-link">
        <i class="nav-icon fas fa-list-alt"></i>
        <p>首页</p>
      </router-link>
    </li>
    <li class="nav-item menu-open">
      <a href="#" class="nav-link active">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p>测试<i class="right fas fa-angle-left"></i></p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item">
          <router-link to="/test/testa" class="nav-link">
            <i class="far fa-circle nav-icon"></i>
            <p>测试A</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/test/testb" class="nav-link">
            <i class="far fa-circle nav-icon"></i>
            <p>测试B</p>
          </router-link>
        </li>
      </ul>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <i class="nav-icon fas fa-copy"></i>
        <p>测试<i class="fas fa-angle-left right"></i><span class="badge badge-info right">6</span></p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item">
          <router-link to="/test/testa" class="nav-link">
            <i class="far fa-circle nav-icon"></i>
            <p>测试A</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/test/testb" class="nav-link">
            <i class="far fa-circle nav-icon"></i>
            <p>测试B</p>
          </router-link>
        </li>
      </ul>
    </li>
     <li class="nav-item">
      <router-link to="/about" class="nav-link">
        <i class="nav-icon fas fa-list-alt"></i>
        <p>关于</p>
      </router-link>
    </li>
  </ul>
</nav>
</template>

<script>
	export default {}
</script>